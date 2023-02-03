import React from 'react'
import {
    Box,
} from '@mui/material';
import ModalTitle from './ModalTitle';

export default function ChangeTitle({step}) {
    return (
        <Box>
            {
                step === 1
                    ? <ModalTitle title={data[0].title} subTitle={data[0].subTitle}/>
                    : step === 2
                        ? <ModalTitle title={data[1].title} subTitle={data[1].subTitle}/>
                        : step === 3
                            ? <ModalTitle title={data[2].title} subTitle={data[2].subTitle}/>
                            : null
            }
        </Box>
    )
}

const data = [
    {
        title: '1. 이모지 사용하기',
        subTitle: '원하는 이모지를 선택해서 사진을 업로드합니다.'
    },
    {
        title: '2. 이모지 생성하기',
        subTitle: '자신만의 이모지를 만듭니다.'
    },
    {
        title: '3. ???',
        subTitle: '???'
    },

]