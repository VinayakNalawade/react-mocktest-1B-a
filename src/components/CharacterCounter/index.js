import {Component} from 'react'

import {v4 as uuid} from 'uuid'

import {
  MainContainer,
  ResultSection,
  RsHeading,
  ResultContainer,
  NoResultsImg,
  ResultList,
  ResultItem,
  ResultPara,
  InputSection,
  IsHeading,
  InputAndButton,
  Input,
  Button,
} from './styledComponents'

class CharacterCounter extends Component {
  state = {results: [], value: ''}

  changeValue = event => this.setState({value: event.target.value})

  addResults = event => {
    event.preventDefault()
    const {value} = this.state

    const obj = {word: value, id: uuid()}

    if (value.length > 0) {
      this.setState(prev => ({results: [...prev.results, obj], value: ''}))
    }
  }

  renderResult = () => {
    const {results} = this.state

    if (results.length === 0) {
      return (
        <NoResultsImg
          alt="no user inputs"
          src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
        />
      )
    }

    return (
      <ResultList>
        {results.map(each => (
          <ResultItem key={each.id}>
            <ResultPara>
              {each.word} : {each.word.length}
            </ResultPara>
          </ResultItem>
        ))}
      </ResultList>
    )
  }

  render() {
    const {value} = this.state
    return (
      <MainContainer>
        <ResultSection>
          <RsHeading>Count the characters like a Boss...</RsHeading>
          <ResultContainer>{this.renderResult()}</ResultContainer>
        </ResultSection>
        <InputSection>
          <IsHeading>Character Counter</IsHeading>
          <InputAndButton onSubmit={this.addResults}>
            <Input
              placeholder="Enter the Characters here"
              value={value}
              onChange={this.changeValue}
            />
            <Button type="submit">Add</Button>
          </InputAndButton>
        </InputSection>
      </MainContainer>
    )
  }
}

export default CharacterCounter
