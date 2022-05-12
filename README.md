# Design system RCI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.3.

## Development server

Run `ng serve ` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Configuration 

il est necessaire d'installer Sass

creation d'un nouveau projet : 

```ng new my-sassy-app --style=scss```

convertir un projet existant : 

```ng set defaults.styleExt scss```


## Thematique de couleurs

voir le fichier `variables.scss` dans le dossier styles.

si vous modifiez une couleur il faudra verifier l'impact sur les composants ainsi que sur la cohérence graphique.
Dernier point d'attention l'accessibilité.

```css
--grey-dark: #757575; 
--grey-light : #f2f6f8;
--pink-light : #FFF3DC;
--blue : #1b2654;
--blue-300 : #044570;

```

## Boutons radio

 appel du composant :

```html
 <app-radio-button
    [dataInputs]="[{name : 'Kobolds', value:'kobold-1'},{name : 'Elves', value:'elfe-1'}," 
    [groupName]="'Fantasy'">
</app-radio-button>
```

le composant prend en paramètre un tableau d'objets ```dataInputs[]``` composé de la facon suivante :

``` 
[dataInputs]="[{name : 'Kobolds', value:'kobold-1'},{name : 'Elves', value:'elfe-1'},]"

name => affiche le label
value => set la value du bouton radio

```
et d'un ```groupName``` qui définit le name attribut des boutons radios
```
[groupName]="'Fantasy'"
```

## Checkbox

Appel du composant :

```html
  <app-checkbox [idInput]="'check_1'" [val]="'v1'" [labelInnerText]="'checkbox 1'"></app-checkbox>
```

le composant prend 3 paramètres :

```[idInput]``` correspond a l'id , nécessaire pour associer le label à l'input 

```[val]``` définit la valeur de la checkbox

```[labelInnerText]``` texte du label 




## Boutons

```html
  <app-buttons class=" btn-primary-bg" [text]="'Valider'" ></app-buttons>
``` appel du composant :










