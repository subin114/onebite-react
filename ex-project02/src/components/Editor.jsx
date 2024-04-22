import "./Editor.scss";
import { useState, useRef, useContext } from "react";
import { TodoDispatchContext } from "../App";

const Editor = () => {
  const { onCreate } = useContext(TodoDispatchContext);

  const [content, setContent] = useState("");
  const contentRef = useRef();

  /** input 값 변경 */
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  /** 키보드 엔터 시 추가 */
  const onKeyDown = (e) => {
    if (e.keyCode === 13) onSubmit();
  };

  /** 추가 */
  const onSubmit = () => {
    // 빈 문자열 입력 시
    if (content === "") {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent(""); // input 초기화
  };

  return (
    <div className="Editor">
      <input
        ref={contentRef}
        value={content}
        onKeyDown={onKeyDown}
        onChange={onChangeContent}
        placeholder="새로운 Todo..."
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
