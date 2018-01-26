import React from 'react'
import ReactTable from 'react-table'
import $ from 'jquery';

class Table extends React.Component{

  constructor(props) {
     super(props);

     this.state = {
       data: this.props.data,
       filteredData: this.props.data,
       pageSize:this.props.pageSize
     };
   }

   componentWillReceiveProps(nextProps) {
     if(nextProps.data !== this.props.data) {
       this.setState({data:nextProps.data});
       this.setState({filteredData:nextProps.data});
       this.setState({pageSize:nextProps.data.length});

     }
  }

getCell= (value,{col}) =>{
  console.log('value: ',value)
  console.log('col',col)
  if (col.render){
    console.log(col.render)
    return col.render(value)
  }else{
    return value
  }
}

  getColumns =(columns) =>{
    return columns.map( col => {
        let retcol={Header: col.title,accessor:col.field}
        if (col.align ) {
          retcol.Cell= row => (
              <div style={{ textAlign:col.align }} >{this.getCell(row.value,{col})}</div>
          )
        }
        {col.maxWidth ? retcol.maxWidth=col.maxWidth : null}
        return retcol
      }
    )
  }

  getSort = (sort) => {
    return sort.map( sortcol =>  {return {id: sortcol.field,desc: sortcol.order==='desc'}}  )
  }


handleSearch = (event) => {
  var filter = $('.search').val().toUpperCase();
  // if (filter && filter!=='') {
  //     $('.ReactTable').find(".rt-td:not(:contains(" + filter + "))").parent().parent().slideUp();
  //     $('.ReactTable').find(".rt-td:contains(" + filter + ")").parent().parent().slideDown();
  //   } else {
  //     $('.ReactTable').find(".rt-tr-group").slideDown();
  //   }
  //var filterBy = event.target.value.toString().toLowerCase();
    var size = this.state.data.length;
    var filteredList = [];
  for (var index = 0; index < size; index++) {
      var v = '' //this.state.data[index]['ragSociale12'];
      $.each(this.state.data[index],function(key,value){
        v+=value;
        });

      if (v.toString().indexOf(filter) !== -1) {
        filteredList.push(this.state.data[index]);
      }
    }
    this.setState({filteredData: filteredList,pageSize:filteredList.length});


}

timeout = null;

handleKey= (event) => {
  clearTimeout(this.timeout);
 this.timeout=setTimeout(function() { this.handleSearch(); }.bind(this), 300);
}

  render(){
    return(
      <div className="Reactable-container " style={this.props.style} >
      {this.props.filter && <div><input className="search" type="search"   onKeyUp={this.handleKey}/></div>}
        <ReactTable style={this.props.style} className="-striped -highlight shadow1"
          data={this.state.filteredData}
          columns={this.getColumns(this.props.columns)}
          loading={this.props.loading}
          showPagination= {false}
          defaultPageSize={this.props.pageSize}
          pageSize={this.state.pageSize}
          noDataText="Nessun record trovato"
          defaultSorted={this.props.sort && this.getSort(this.props.sort)}
          getTdProps={(state, rowInfo) => ({
            onClick: () =>{
              this.props.onRowClick(rowInfo.original)
            }
          })}
       />
       </div>
    )
  }
}

export default Table
