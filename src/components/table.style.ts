export const TABLE_STYLE = `
/* bootstrap override: */

:host /deep/ .data-table.table > tbody+tbody {
    border-top: none;
}
:host /deep/ .data-table.table td {
    vertical-align: middle;
}

:host /deep/ .data-table > thead > tr > th,
:host /deep/ .data-table > tbody > tr > td {
	overflow: hidden;
}

/* I can't use the bootstrap striped table, because of the expandable rows */
:host /deep/ .row-odd {
    background-color: #F6F6F6;
}
:host /deep/ .row-even {
}

.data-table .substitute-rows > tr:hover,
:host /deep/ .data-table .data-table-row:hover {
    background-color: #ECECEC;
}
/* table itself: */

.data-table {
    box-shadow: 0 0 15px rgb(236, 236, 236);
    table-layout: fixed;
}

/* header cells: */

.column-header {
    position: relative;
}
.expand-column-header {
	width: 50px;
}
.select-column-header {
	width: 50px;
	text-align: center;
}
.index-column-header {
	width: 40px;
}
.column-header.sortable {
    cursor: pointer;
}
.column-header .column-sort-icon {
	float: right;
}
.column-header.resizable .column-sort-icon {
    margin-right: 8px;
}
.column-header .column-sort-icon .column-sortable-icon {
    color: lightgray;
}
.column-header .column-resize-handle {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    padding: 0;
    width: 8px;
    height: 100%;
    cursor: col-resize;
}

/* cover: */

.data-table-box {
    position: relative;
}

.loading-cover {
   position: absolute;
   width: 100%;
   height: 100%;
   background-color: rgba(255, 255, 255, 0.3);
   top: 0;
}
`;