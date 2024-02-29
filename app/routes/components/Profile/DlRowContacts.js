import React from 'react';
import PropTypes from 'prop-types';

const DlRowContacts = (props) =>{

    const clientData = props.clientData;
    return(
        <React.Fragment>
               <dl className="row">
                <dt className={ `col-sm-3 ${ props.leftSideClassName }` }>First Name</dt>
                <dd className={ `col-sm-9 ${ props.rightSideClassName }` }>{clientData.firstname}</dd>
                <dt className={ `col-sm-3 ${ props.leftSideClassName }` }>Middle Name</dt>
                <dd className={ `col-sm-9 ${ props.rightSideClassName }` }>{clientData.middlename}</dd>
                <dt className={ `col-sm-3 ${ props.leftSideClassName }` }>Surname</dt>
                <dd className={ `col-sm-9 ${ props.rightSideClassName }` }>{clientData.surname}</dd>
                <dt className={ `col-sm-3 ${ props.leftSideClassName }` }>Email</dt>
                <dd className={ `col-sm-9 ${ props.rightSideClassName }` }>
                    <a href="#">{clientData.emailAddress}</a>
                </dd>
                <dt className={ `col-sm-3 ${ props.leftSideClassName }` }>Gender</dt>
                <dd className={ `col-sm-9 ${ props.rightSideClassName }` }><a href="#">{clientData.gender.value}</a></dd>
            </dl>

            <dl className="row">
                <dt className={ `col-sm-3 ${ props.leftSideClassName }` }>Phone</dt>
                <dd className={ `col-sm-9 ${ props.rightSideClassName }` }>{clientData.mobileNo}</dd>
                <dt className={ `col-sm-3 ${ props.leftSideClassName }` }>Alt Mobile</dt>
                <dd className={ `col-sm-9 ${ props.rightSideClassName }` }>N/A</dd>
                
            </dl>
        </React.Fragment>
    )
}

DlRowContacts.propTypes = {
    leftSideClassName: PropTypes.node,
    rightSideClassName: PropTypes.node
};
DlRowContacts.defaultProps = {
    leftSideClassName: "text-right",
    rightSideClassName: "text-left",
    clientData:{}
};

export { DlRowContacts };
