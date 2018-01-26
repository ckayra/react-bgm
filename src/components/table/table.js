import React from 'react'
import ReactTable from 'react-table'

class Table extends React.Component{

getColumns =(columns) =>{
  return columns.map( col => {
    // Cell: Cell()
// length: 1
// name: "Cell"
// prototype: Object { … }
// __proto__: function ()
// Header: "Cod. Agente"
// accessor: "codiceAgente"
// maxWidth: 100
    console.log(col)
      let retcol={Header: col.title,accessor:col.field}
      if (col.align ) {
        retcol.Cell= row => (
            <div style={{ textAlign:col.align }} >{row.value}</div>
        )
      }
      {col.maxWidth ? retcol.maxWidth=col.maxWidth : ''}
       console.log(retcol)
      return retcol
    }
  )
//  return columns;
}

  render(){
    return(
      <ReactTable style={{maxWidth:'700px'}} className='shadow1'
        data={this.props.data}
        columns={this.getColumns(this.props.columns)}
        loading={this.props.loading}
        showPagination= {false}
        defaultPageSize={this.props.pageSize}
        pageSize={this.props.pageSize}
        noDataText="Nessun record trovato"
        getTdProps={(state, rowInfo) => ({
          onClick: () =>{
            this.props.onRowClick(rowInfo.original)
          }
        })}
     />
    )
  }
}

export default Table
