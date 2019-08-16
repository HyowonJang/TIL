import React, {Component} from "react";

class TOC extends Component {
  render() {
    var lists = [];
    var data = this.props.data;
    var i = 0;
    while (i < data.length) {
      lists.push(
        <li key={data[i].id}>
          {/* 자동으로 발생하는 list이기 때문에 react에서 key값을 요구함*/}
          <a href={"/content/" + data[i].id}>{data[i].title}</a>
          {/* 여기서 "/content/"는 큰 의미는 없다 */}
        </li>
      );
      i++;
    }

    return (
      <nav>
        <ul>{lists}</ul>
      </nav>
    );
  }
}

export default TOC;
