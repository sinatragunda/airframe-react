import React from 'react';

import PropTypes from 'prop-types';
import { 
    InputGroup,
    InputGroupAddon,
    Input,
    Button,
} from './../../../components';

const Description = ({showDescription})=>{
    if(showDescription){
        return( 
            <h4 className="mt-2 mb-3">
                    <small className="mr-1">
                        Search Results for
                    </small> "Content Designer" 
                    <small className="mr-2">
                        <small className="ml-3">
                            About 1,370 result (0.13 seconds)
                        </small>
                    </small>
            </h4>
        )
    }
    return <div></div>
}

const SearchResultsHeader = ({showDescription ,mb}) => (
    <React.Fragment>
        <div className={mb}>
            
            <Description showDescription = {showDescription} />

            <InputGroup>
                <Input placeholder="Search for..." className="bg-white" />
                <InputGroupAddon addonType="append">
                    <Button color="primary">
                        <i className="fa fa-search"></i>
                    </Button>
                </InputGroupAddon>
            </InputGroup>
        </div>
    </React.Fragment>
)


SearchResultsHeader.defaultProps = {
    showDescription: true,
    mb:"mb-4"
}

export { SearchResultsHeader };
