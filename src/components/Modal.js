import React from 'react';
import './Modal.scss';

const modal = (props) => {
    let modalId = props.project.name.replace(/\s/g,'');

    let badges = null;
    if (props.project.madeWith) {
        badges = props.project.madeWith.map((skill, index) => {
            return (<span className="badge badge-secondary" key={index}>{skill}</span>);
        })
    }
    
    let dates = null;
    if (props.project.date.end) {
        dates = <p className="dates">{props.project.date.start} - {props.project.date.end}</p>
    } else {
        dates = <p className="dates">{props.project.date.start}</p>
    }

    return (
        <div className="modal fade" id={modalId}>
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <img className="img-thumbnail" src={props.project.image} alt={props.project.name}/>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <h5 className="modal-title">{props.project.name}</h5>
                        <div className="badge-container">
                            {badges}
                        </div>
                        {dates}
                        <p className="description">{props.project.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default modal;