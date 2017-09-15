import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import style from '../../style';

const renderTextArea = ({ input, label, type }) => (
            <TextField {...input} style={ style.todoFormTextField }  placeholder='To Do...' />
)

export default renderTextArea;