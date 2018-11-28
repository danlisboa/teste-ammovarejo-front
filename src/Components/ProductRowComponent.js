import React, {Component} from 'react';

export default class ProductRowComponent extends Component {  

  render() {

    return(
      <tr>
        {this.props.data.images.map(img =>
        <td>
            <img src={img.url} alt={`${img.url}`} className='img-thumbnail' width="170"/>
        </td>
        )}

        <td>
          {this.props.data.name} 
          <div><small style={{color: 'grey'}} className='font-weight-bold'>
            {this.props.data.short_description}
          </small></div>
        </td>

        <td>
          <strike style={{color: '#C0C0C0', marginRight: '10px'}} className='font-weight-bold'>
            {this.props.data.last_price.toLocaleString(
              'BRL', { style: 'currency', currency: 'BRL' })
            }
          </strike> por 
          <span className='font-weight-bold' style={{color: '#808080', marginLeft: '10px'}}>
            {this.props.data.actually_price.toLocaleString(
              'BRL', { style: 'currency', currency: 'BRL' })
            }
          </span>
        </td>
      </tr>
    );
  };
}