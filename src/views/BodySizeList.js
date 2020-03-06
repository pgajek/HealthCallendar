import React, { Component } from 'react';
import MainTemplate from 'templates/MainTemplate.js';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from 'components/atoms/Button/Button';

const StyledLink = styled(Link)`
  margin: 30px;
`;
class BodySizeList extends Component {
  state = { dates: [] };
  componentDidMount() {
    const { userId, token } = this.props;

    fetch(`http://164.132.97.42:8080/health-calendar/api/body/dates/user-id/${userId}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(response => {
        console.log(response);
        if (response.length > 0) {
          this.setState({
            ...this.state,
            dates: response,
          });
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    const dates = this.state.dates.map((item, index) => (
      <StyledLink key={index} to={`/bodySizeList/${item}`}>
        <h2>{`${item}`}</h2>
      </StyledLink>
    ));

    return (
      <MainTemplate>
        {dates.length > 0 && dates}
        <Link to="/bodySize">
          <Button>Dodaj</Button>
        </Link>
      </MainTemplate>
    );
  }
}
const mapStateToProps = ({ userId, token }) => ({
  userId,
  token,
});

export default connect(mapStateToProps)(BodySizeList);
