export default {
  interpolation: `The example above deals with interpolation of the {{ titleExample }} property initialized in the AppComponent and a ( | ) pipe operator for text to be transformed to uppercase.`,
  interpolationCode: `<h1>{{ title | uppercase }}</h1>`,
  eventObject:
    'The following code listens to the keyup event and passes the entire event payload ($event) to the component event handler.',
  eventObjectCode: ` <input (keyup)="onKey($event)">
  <p>{{values}}</p>
  `,
  refVaviable:
    "The template is completely self contained. It doesn't bind to the component, the component only gets clean data values from the view. ",
  refVaviableCode: `    <input #box (keyup)="onKey(box.value)">
  <p>{{values}}</p>`,
  enterKey:
    'The code below examines every $event.keyCode and take action only when the key is Enter.',
  enterKeyCode: ` <input type="text" #box2 (keyup.enter)="onEnter(box2.value)" />
  <p>{{ boxValue }}</p>`,
  attDirectiveKey:
    "The directive and the color is applied simultaneously in the same attribute like in the example below. With the help of property alias inside the directive the property is known as highlightColor. Outside the directive, where you bind to it, it's known as appHighlight.",
  attDirectiveCode: `<p [appHighlight]="color">Highlighted with parent component's color</p>`,
  pipeKey:
    "Inside the interpolation expression, you flow the component's birthday value through the pipe operator ( | ) to the Date pipe function on the right. ",
  pipeCode: `<p>My hero's birthday is {{ birthday | date: format | uppercase }}</p>`,
};
