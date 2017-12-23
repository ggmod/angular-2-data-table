## Angular 4 Data Table

This is fork of package [https://github.com/ggmod/angular-2-data-table] (https://github.com/ggmod/angular-2-data-table)

A simple Angular 4 data table, with built-in solutions for features including:

* pagination
* sorting
* row selection (single/multi)
* expandable rows
* column resizing
* selecting visible columns

The component can be used not just with local data, but remote resources too: for example if the sorting and paging happen in the database.

The templates use bootstrap CSS class names, so the component requires a bootstrap .css file to be present in the application using it.

Check out the [demo](https://ggmod.github.io/angular-2-data-table-demo) and its [code](https://github.com/MIt9/angular-4-data-table-demo) for examples of how to use it. 

Demo for pagination with seperate page numbers will be added soon

## Installing:
`npm install angular-4-data-table --save`

## Production (Minification)
Some times this can cause problems.  
To fix it use import like this

`import { DataTableModule } from 'angular-4-data-table';`

and for production build use

`ng build --prod --aot=false`

 ### Added numerical pagination support with 2 next and previous links 
  
#### Licensing
MIT License
