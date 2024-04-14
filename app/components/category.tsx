"use client";

import React from 'react';
import { Accordion, AccordionItem } from '@nextui-org/react';

export default function Category() {
    let list = [1, 2, 3];

    const mapped = () => {
        return list.map((v, i) => (
            <AccordionItem className='border-foreground border-spacing-4 mb-11 '  key={i} aria-label={v.toString()} title={v.toString()}>
                This is accordion {v}
            </AccordionItem>
        ));
    };

    return (
        <Accordion className=' w-6/12 ' variant='splitted'>
            {mapped()}
        </Accordion>
    );
}
