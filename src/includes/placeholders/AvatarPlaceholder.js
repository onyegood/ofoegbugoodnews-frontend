import React, {Component} from "react";

class AvatarPlaceholder extends Component {
  static defaultProps = {
    avatarSrc: "../assets/img/avatar.png",
    avatarAlt: "Hello My Avatar",
    avatarClassName: "rounded-circle img-fluid mx-auto d-block",
    avatarWidth: "80px",
    avatarHeight: "80px",
    avatarMarginTop: "0",
    avatarMarginBottom: "0"
  };
  render() {
    return (
      <img
        src={this.props.avatarSrc}
        alt={this.props.avatarAlt}
        className={this.props.avatarClassName}
        width={this.props.avatarWidth}
        height={this.props.avatarHeight}
        style={{
          marginBottom: this.props.avatarMarginBottom,
          marginTop: this.props.avatarMarginTop
        }}
      />
    );
  }
}

export default AvatarPlaceholder;