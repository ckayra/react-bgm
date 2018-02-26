/* eslint react/forbid-prop-types: 0 */
import React from "react";
import ReactTable from "react-table";
import PropTypes from "prop-types";


class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      filteredData: this.props.data,
      pageSize: this.props.pageSize,
      showClearInput: false,
      loading:true
    };
  }
  componentDidMount() {
    this.searchInput.focus();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.state.data) {
      // data from api
      this.setState({
        data: nextProps.data,
        filteredData: nextProps.data,
        pageSize: nextProps.data.length
      });
    }
    if (nextProps.loading !== this.state.loading) this.setState({loading:nextProps.loading})
  }

  getCell = (value, { col }) => {
    if (col.render) {
      return col.render(value);
    }
    return value;
  };

  getColumns = columns =>
    columns.map(col => {
      const retcol = { Header: col.title, accessor: col.field,id:col.id,sortMethod:col.sortMethod };
      if (col.align) {
        retcol.Cell = row => (
          <div style={{ textAlign: col.align }}>
            {this.getCell(row.value, { col })}
          </div>
        );
      }

      retcol.maxWidth = col.maxWidth ? col.maxWidth : undefined;
      return retcol;
    });

  getSort = sort =>
    sort.map(sortcol => ({
      id: sortcol.field,
      desc: sortcol.order === "desc"
    }));

  handleSearch = () => {
    let v = "";
    const filter = this.searchInput.value.toUpperCase();
    const size = this.state.data.length;
    const filteredList = [];
    for (let index = 0; index < size; index += 1) {
      v = Object.values(this.state.data[index]).join(",");
      if (v.toString().indexOf(filter) !== -1) {
        filteredList.push(this.state.data[index]);
      }
    }

    this.setState({
      filteredData: filteredList,
      pageSize: filteredList.length
    });

    this.setState ({showClearInput:filter!==''})
  };

  timeout = null;

  handleKey = (e) => {
    clearTimeout(this.timeout);
    if(e.keyCode === 46) {
      this.clearFilter()
   } else{
    this.timeout = setTimeout(() => {
      this.handleSearch();
    }, 300);
  }
  };

  showDeleteButton = () => {
    this.setState({ showClearInput: this.searchInput.value !== "" });
  };

  clearFilter=()=>{
    this.searchInput.value='';
      this.searchInput.focus();
    this.setState({
      showClearInput: false,
      filteredData: this.state.data,
      pageSize: this.state.data.length
    });
  }



  render() {
    return (
      <div className="Reactable-container " style={this.props.style}>
        {this.props.filter && (
          <div className="searchinput-container ">
            <input
              value={this.state.inputValue}
              ref={input => {
                this.searchInput = input;
              }}
              className="search search-input"
              type="search"
               onKeyUp={this.handleKey}
              // onChange={this.updateInputValue}
              // onMouseOver={this.showDeleteButton}
              // onFocus={this.showDeleteButton}
              // onMouseOut={this.setState({ showClearInput: false })}
              // onBlur={this.setState({ showClearInput: false })}
            />
          {this.state.showClearInput && <div className="searchinput-clear" onKeyUp='x' tabIndex="-1" role='button'  disabled = {(this.props.loading)? "disabled" : ""} onClick={() => {this.clearFilter()}}>x</div>}
          </div>
        )}
        <ReactTable
          style={this.props.style}
          className="-striped -highlight shadow2"
          data={this.state.filteredData}
          columns={this.getColumns(this.props.columns)}
          loading={this.props.loading}
          showPagination={false}
          defaultPageSize={this.props.pageSize}
          pageSize={this.state.pageSize}
          noDataText="Nessun record trovato"
          defaultSorted={this.props.sort && this.getSort(this.props.sort)}
          getTdProps={(state, rowInfo, column) => ({
            onClick: () => {
              this.props.onRowClick(rowInfo.original,column);
            }
          })}
        />
      </div>
    );
  }
}

Table.defaultProps = {
  onRowClick: () => {},
  sort: {},
  loading: false,
  filter: false,
  style: {},
  pageSize: 30
};

Table.defaultProps = {
  data:[]
};


Table.propTypes = {
  onRowClick: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object),
  sort: PropTypes.arrayOf(PropTypes.shape({
    field: PropTypes.string.isRequired,
    order: PropTypes.string
  })),
  loading: PropTypes.bool,
  columns: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    field: PropTypes.string.isRequired,
    maxWidth: PropTypes.number,
    align: PropTypes.string,
    render: PropTypes.func,
    sortMethod:PropTypes.func
  })).isRequired,
  filter: PropTypes.bool,
  style: PropTypes.object,
  pageSize: PropTypes.number
};

export default Table;
