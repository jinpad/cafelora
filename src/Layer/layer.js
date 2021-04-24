import './layer.css';

export const Layer = (props) => {
  let layerHtml = `
  <div class="layer>
   <div class="layer__color" style="background-color: ${props.color}"></div>
   <div class="layer__label">${props.name}</div>
   ,</div>`;

  return LayerHtml;
};
