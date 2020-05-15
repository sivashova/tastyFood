import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';


export const Icon = ({
    className,
    style,
    fill,
    glyph: { id, viewBox },
    color,
    dataQaId,
    onClick,
    ...props
}) => {
    const rootClassName = classnames({
        [className]: className,
    });

    return (
        <svg
            className={rootClassName}
            style={style}
            fill={fill}
            viewBox={viewBox}
            data-qaid={dataQaId}
            onClick={onClick}
            {...props}
        >
            {id && (
                <use xlinkHref={`#${id}`} />
            )}
        </svg>
    );
};

Icon.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    fill: PropTypes.string,
    glyph: PropTypes.shape({
        id: PropTypes.string.isRequired,
        viewBox: PropTypes.string.isRequired,
    }).isRequired,
    dataQaId: PropTypes.string,
    onClick: PropTypes.func,
};
