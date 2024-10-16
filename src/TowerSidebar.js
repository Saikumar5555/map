import React from 'react';

const TowerSidebar = ({ towers, onSelectTower }) => {
    return (
        <div style={{ position: 'absolute', top: '10%', left: '10%', background: 'white', padding: '10px', zIndex: 1000 }}>
            <h2>Tower List</h2>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {towers.map(tower => (
                    <li key={tower.id} style={{ cursor: 'pointer', margin: '5px 0' }} onClick={() => onSelectTower(tower.position)}>
                        {`Cell Tower ${tower.id} in ${tower.city}`}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TowerSidebar;
