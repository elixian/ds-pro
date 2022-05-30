# Design system RCI

Projet de design system construit sur Angular v13 et Compodoc.

Le projet comprends deux structures distincts :

- un site implémentant les composants [Démonstration](/)
- une documentation des composants et le style associé [Documentation Design RCI](/doc/index.html)

## Thematique de couleurs

voir le fichier `_variables.scss` dans le dossier styles.

il contient la thematique couleur du site RCI.

Il est possible de modifier ces variables, cependant cela aura un impact sur les éléments utilisants ces variables.

Dernier point d'attention l'accessibilité.

```scss
// Colors
:root{
    //opacity
    --color-opacity : 1;

     /* ====================
            grey color 
        ==================== */      
    --c-grey-300 : #e0e0e0;
    --c-grey-500 : #828282;
    --c-grey-700: #333333;

    /* ====================
            blue color 
        ==================== */   
    --c-blue-100 : #F1F3F9;
    --c-blue-300 : #6c87b0;
    --c-blue-500 : #2e548e;
    --c-blue-700: #0F2951;

    --c-state-declared : #eb5757;
    --c-state-revised : #1f5de3;
    --c-state-neutralized : #9b51e0;
    --c-state-disputed : #f2994a; 
}
```

## Boutons radio

[Documentation du composant](/doc/components/RadioButtonComponent.html)
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










