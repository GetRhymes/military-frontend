import React from 'react';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import AddBoxIcon from '@mui/icons-material/AddBox';


const SidebarData = [
    {
        id: '1',
        name: "Просмотр",
        path: "/info",
        icon: <TextSnippetIcon/>
    },
    {
        id: '2',
        name: "Добавить",
        path: "/create",
        icon: <AddBoxIcon/>
    }
];

export default SidebarData;