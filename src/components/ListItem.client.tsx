// Assuming this is in your ListItem.client.tsx or wherever your ListItem component is defined

import React from 'react';

interface ListItemProps {
    firstName: string;  // Ensure these props are defined
    lastName: string;
}

const ListItem: React.FC<ListItemProps> = ({ firstName, lastName }) => {
    return (
        <li>
            <strong>{firstName}</strong> {lastName}
        </li>
    );
};

export default ListItem;
