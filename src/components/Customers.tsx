import styled from 'styled-components';
import React from 'react';

const StyledCustomers = styled.ul`
  display: flex;
  li {
    margin-right: 40px;
  }
`;

const Customers = ({ className }) => {
    const CustomersDate = [
        { title: 'AMOREPACIFIC', imgSrc: 'img_logo_amorepacific' },
        { title: 'KB', imgSrc: 'img_logo_kb' },
        { title: 'NEOWIZ', imgSrc: 'img_logo_neowiz' },
        { title: 'JOYCITY', imgSrc: 'img_logo_joycity' },
    ];

    const CustomerList = CustomersDate.map(
        (item) => (
            <li>
                <img
                    src={`/assets/images/${item.imgSrc}.svg`}
                    alt={`${item.title}`}
                />
            </li>
        ),
    );

    return (
        <div className={className}>
            <StyledCustomers>
                {CustomerList}
            </StyledCustomers>
        </div>
    );
};

export default Customers;
