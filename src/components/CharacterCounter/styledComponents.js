import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  display: flex;
`

export const ResultSection = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 50%;
`
export const RsHeading = styled.h1`
  background-color: #ffbf1f;
  padding: 5%;
  font-size: 48px;
  color: #334155;
  margin: 0;
`

export const ResultContainer = styled.div`
  background-color: #ffc533;
  padding: 5%;
  flex-grow: 1;
`

export const NoResultsImg = styled.img`
  width: 100%;
  margin-top: 15vh;
`

export const ResultList = styled.ul`
  padding: 0;
`

export const ResultItem = styled.li`
  list-style-type: none;
  margin-bottom: 20px;
`
export const ResultPara = styled.p`
  font-size: 25px;
  color: #0f172a;
  font-weight: 700;
`
export const InputSection = styled.div`
  padding: 3%;
  background-color: #0f172a;
  min-width: 50%;
`

export const IsHeading = styled.h1`
  color: #ffbf1f;
  width: 100%;
  text-align: center;
  font-size: 34px;
`

export const InputAndButton = styled.form`
  display: flex;
  margin-top: 60px;
`
export const Input = styled.input`
  outline: none;
  border: 1px solid #272c47;
  padding: 17px;
  border-radius: 5px;
  background-color: #ffffff;
  font-size: 20px;
  color: #0f172a;
  flex-grow: 1;
`
export const Button = styled.button`
  outline: none;
  border: none;
  color: #334155;
  border-radius: 5px;
  padding: 17px;
  font-size: 20px;
  font-weight: 700;
  margin-left: 10px;
  background-color: #ffbf1f;
`
