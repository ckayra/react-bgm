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
      pageSize: this.props.pageSize
    };
  }
  componentDidMount() {
    this.searchInput.focus();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.props.data) {
      this.setState({ data: nextProps.data });
      this.setState({ filteredData: nextProps.data });
      this.setState({ pageSize: nextProps.data.length });
    }
  }

  getCell = (value, { col }) => {
    if (col.render) {
      return col.render(value);
    }
    return value;
  };

  getColumns = columns =>
    columns.map(col => {
      const retcol = { Header: col.title, accessor: col.field };
      if (col.align) {
        retcol.Cell = row => (
          <div style={{ textAlign: col.align }}>
            {this.getCell(row.value, { col })}
          </div>
        );
      }
      //  col.maxWidth && (retcol.maxWidth = col.maxWidth);
      col.maxWidth ? (retcol.maxWidth = col.maxWidth) : (retcol.maxWidth = 0);
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
      // -      $.each(this.state.data[index],function(key,value){
      // -        v+=value;
      // -     });
      // for (
      //   let i = 0;
      //   i < Object.values(this.state.data[index]).length;
      //   i += 1
      // ) {
      //   console.log(this.state.data[index]);
      //   v += this.state.data[index][i];
      // }
      v = Object.values(this.state.data[index]).join(",");
      if (v.toString().indexOf(filter) !== -1) {
        filteredList.push(this.state.data[index]);
      }
    }

    this.setState({
      filteredData: filteredList,
      pageSize: filteredList.length
    });
  };
  timeout = null;
  // updateInputValue = evt => {
  //   this.setState(
  //     {
  //       filter: evt.target.value.toUpperCase()
  //     },
  //     this.handleSearch
  //   );
  // };
  handleKey = () => {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.handleSearch();
    }, 300);
  };

  render() {
    return (
      <div className="Reactable-container " style={this.props.style}>
        {this.props.filter && (
          <div>
            <input
              value={this.state.inputValue}
              ref={input => {
                this.searchInput = input;
              }}
              className="search"
              type="search"
              onKeyUp={this.handleKey}
              // onChange={this.updateInputValue}
            />
          </div>
        )}
        <ReactTable
          style={this.props.style}
          className="-striped -highlight shadow1"
          data={this.state.filteredData}
          columns={this.getColumns(this.props.columns)}
          loading={this.props.loading}
          showPagination={false}
          defaultPageSize={this.props.pageSize}
          pageSize={this.state.pageSize}
          noDataText="Nessun record trovato"
          defaultSorted={this.props.sort && this.getSort(this.props.sort)}
          getTdProps={(state, rowInfo) => ({
            onClick: () => {
              this.props.onRowClick(rowInfo.original);
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

Table.propTypes = {
  onRowClick: PropTypes.func,
  data: PropTypes.object.isRequired,
  sort: PropTypes.shape({
    field: PropTypes.string.isRequired,
    order: PropTypes.string
  }),
  loading: PropTypes.bool,
  columns: PropTypes.shape({
    title: PropTypes.string,
    field: PropTypes.string.isRequired,
    maxWidth: PropTypes.number,
    align: PropTypes.string,
    render: PropTypes.func
  }).isRequired,
  filter: PropTypes.string,
  style: PropTypes.object,
  pageSize: PropTypes.number
};

export default Table;
