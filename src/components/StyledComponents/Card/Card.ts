import styled from 'styled-components'


const Card = styled.div`
    border-radius: 12px;
    display: flex;
    flex-direction: column;

    width: calc(100% / 3);
    padding: var(--spacing-200);

    .card {
        background-repeat: no-repeat;
        background-position: right;
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .total-characters-card {
        background-color: var(--purple-400);
        background-image: var(--purple--bkgd);
       
    }
    
    .word-characters-card {
        background-color: var(--yellow-500);
        background-image: var(--yellow-bkgd);
        
    }
    .sentence-characters-card {
        background-color: var(--orange-500);
        background-image: var(--orange-bkgd);
       
    }

    span {
        font-size: 4rem;
        color: var(--neutral-900);
        font-weight: 700;
    }

    p {
        color: var(--neutral-900);
        font-weight: var(--fw-regular);
    }
`

export { Card }