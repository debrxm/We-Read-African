import React from 'react';
class ProgressIndicator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: 0
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollProgress);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollProgress);
  }

  scrollProgress = () => {
    const scrollPx = document.documentElement.scrollTop;
    const winHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = `${(scrollPx / winHeightPx) * 100}%`;
    this.setState({
      scrolled: scrolled
    });
  };

  render() {
    const progressContainerStyle = {
      background: '#77323b2c',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
      height: '5px',
      position: 'fixed',
      top: '110px',
      left: 0,
      width: '100vw',
      zIndex: 99
    };

    const progressBarStyle = {
      height: '5px',
      background: '#77323b',
      width: this.state.scrolled
    };

    return (
      <div>
        <div className="progress-container" style={progressContainerStyle}>
          <div className="progress-bar" style={progressBarStyle} />
        </div>
      </div>
    );
  }
}
export default ProgressIndicator;
