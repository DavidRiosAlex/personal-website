import React from 'react';
import { ScreenCommon } from '../../../Commons/Components/ScreenCommon';

function CurriculumComponent () {
    return (
        <ScreenCommon>
            <div></div>
        </ScreenCommon>
    );
}

export const Curriculum = React.memo(CurriculumComponent);
