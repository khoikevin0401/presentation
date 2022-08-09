import styled from "styled-components"

export const SearchUpdate = styled.section`
  position: relative;
    ul {
      position: absolute;
      width: 100%;
      background-color: #ffffff;
      max-height: 200px;
      overflow-y: scroll;
      z-index: 10

      
    }
    ul::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: #ffffff;
    }
    ul::-webkit-scrollbar {
      width: 4px;
      background-color: #ffffff;
    }
    ul::-webkit-scrollbar-thumb {
      background-color: #8D81E8;
      border: 2px solid #ffffff;
    }
    li {
      border-bottom: 1px solid gray.300;
    }
`