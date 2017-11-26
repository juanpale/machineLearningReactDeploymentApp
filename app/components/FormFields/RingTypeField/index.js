import React from 'react';
import ProptTypes from 'prop-types';
import { FormControl, FormGroup } from 'react-bootstrap';
import ImageAndName from 'components/ImageAndName';
import Cobwebby from '../../../images/ring/cobwebby.png';
import Evanescent from '../../../images/ring/evanescent.jpg';
import Flaring from '../../../images/ring/flaring.png';
import Large from '../../../images/ring/large.jpg';
import None from '../../../images/ring/none.jpg';
import Pendant from '../../../images/ring/pendant.png';
import Sheathing from '../../../images/ring/sheathing.png';
import Zone from '../../../images/ring/zone.png';


function RingTypeField({ value, onChange }) {
  return (
    <div>
      <h3>Ring type</h3>
      <div style={{ paddingLeft: '12px', paddingRight: '12px' }}>
        <FormGroup controlId="formControlsSelect">
          <FormControl value={value} name="ringtype" componentClass="select" placeholder="select" onChange={onChange}>
            <option value="n">None</option>
            <option value="c">Cobwebby</option>
            <option value="e">Evanescent</option>
            <option value="f">Flaring</option>
            <option value="l">Large</option>
            <option value="p">Pendant</option>
            <option value="s">Sheathing</option>
            <option value="z">Zone</option>
          </FormControl>
        </FormGroup>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <ImageAndName name={'None'} image={None} height={100} width={100} />
        <ImageAndName name={'Cobwebby'} image={Cobwebby} height={100} width={100} />
        <ImageAndName name={'Evanescent'} image={Evanescent} height={100} width={100} />
        <ImageAndName name={'Flaring'} image={Flaring} height={100} width={100} />
        <ImageAndName name={'Large'} image={Large} height={100} width={100} />
        <ImageAndName name={'Pendant'} image={Pendant} height={100} width={100} />
        <ImageAndName name={'Sheathing'} image={Sheathing} height={100} width={100} />
        <ImageAndName name={'Zone'} image={Zone} height={100} width={100} />
      </div>
    </div>
  );
}

RingTypeField.propTypes = {
  value: ProptTypes.string,
  onChange: ProptTypes.func,
};

export default RingTypeField;
