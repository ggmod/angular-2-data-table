export const HEADER_STYLE = `
.data-table-header {
    min-height: 25px;
    margin-bottom: 10px;
}
.title {
    display: inline-block;
    margin: 5px 0 0 5px;
}
.button-panel {
    float: right;
}
.button-panel button {
    outline: none !important;
}

.column-selector-wrapper {
    position: relative;
}
.column-selector-box {
    box-shadow: 0 0 10px lightgray;
    width: 150px;
    padding: 10px;
    position: absolute;
    right: 0;
    top: 1px;
    z-index: 1060;
}
.column-selector-box .checkbox {
    margin-bottom: 4px;
}
.column-selector-fixed-column {
    font-style: italic;
}
`;