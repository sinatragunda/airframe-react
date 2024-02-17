
import React from 'react';

class FormHelper extends React.Component{

    static eventTargetValue = (event)=>{
        return event.target.value ;
    }
}

export default FormHelper;
