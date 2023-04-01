const colors = ['#3CDC86', '#18A0FB', '#ED2D95', '#F4A732', '#9B53F8'];

const dataPie = [
  { name: 'Roles', value: 200, color: '#18A0FB' },
  { name: 'Users', value: 400, color: '#ED2D95' },
  { name: 'Policies', value: 600, color: '#3CDC86' },
];

const dataType = [
  { name: 'Diagrams', active: false },
  { name: 'Graph', active: true },
  { name: 'Table', active: false },
  { name: 'Paragraph', active: false },
];

const dataLocation = [
  { name: 'Charlottetown', active: false },
  { name: 'Halifax', active: false },
  { name: 'Naperville', active: true },
  { name: 'Vernon', active: false },
  { name: 'Montreal', active: false },
];

const dataRating = [
  {
    text: 'Rating 94%',
    subtext: '116 sales',
    areaName: 'green',
    color: '#3CDC86',
    active: true,
  },
  {
    text: 'Rating 94%',
    subtext: '116 sales',
    areaName: 'red',
    color: '#ED2D95',
    active: true,
  },
  {
    text: 'Rating 94%',
    subtext: '116 sales',
    areaName: 'blue',
    color: '#18A0FB',
    active: true,
  },
  {
    text: 'Rating 94%',
    subtext: '116 sales',
    areaName: null,
    color: '#F4A732',
    active: false,
  },
  {
    text: 'Rating 94%',
    subtext: '116 sales',
    areaName: null,
    color: '#9B53F8',
    active: false,
  },
];

export { colors, dataPie, dataType, dataLocation, dataRating };
