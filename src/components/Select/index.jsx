import { Container } from "./styles";

import { FaChevronDown, FaChevronUp, FaCheck, FaFilter } from "react-icons/fa6";

import { useRef } from "react";

export function Select({
  id,
  options,
  srOnly = false,
  label,
  defaultOption,
  name,
  selectedOption = { value: "", label: "" },
  setSelectedOption,
  ...rest
}) {
  const optionsViewButton = useRef();

  function collapseSelect(e) {
    const isMouseOrTouch =
      e.type === "click"
        ? e.nativeEvent.pointerType === "mouse" ||
          e.nativeEvent.pointerType === "touch"
        : false;

    const isSpaceOrEsc =
      e.type === "keydown" ? e.key === " " || e.key === "Escape" : false;

    (isSpaceOrEsc || isMouseOrTouch) && optionsViewButton.current?.click();
  }

  function handleChangeSelected(option) {
    setSelectedOption(option);
  }

  return (
    <Container className="select-component">
      <div className="select">
        <label data-sronly={srOnly} htmlFor={id}>
          {label}
        </label>
        <input
          {...rest}
          type="checkbox"
          className="options-view-button"
          id={id}
          ref={optionsViewButton}
        />

        <div className="select-button">
          <div className="logo-value">
            <FaFilter />
            {selectedOption.label == "" ? (
              <p className="default-value">{defaultOption}</p>
            ) : (
              <p className="selected-value">{selectedOption.label}</p>
            )}
          </div>

          <div className="chevrons">
            <FaChevronDown data-chevron="chevronDown" />
            <FaChevronUp data-chevron="chevronUp" />
          </div>
        </div>
      </div>

      <ul className="options-list">
        {options?.length > 0 && (
          <>
            <li className="option-value">
              <input
                type="radio"
                name={name}
                id="default"
                value="default"
                defaultChecked={selectedOption.value === ""}
                onClick={(e) => {
                  handleChangeSelected({ value: "", label: "" });
                  collapseSelect(e);
                }}
                onKeyDown={(e) => {
                  handleChangeSelected({ value: "", label: "" });
                  collapseSelect(e);
                }}
              />
              <div className="default-option">
                <label htmlFor="all" className="label">
                  Todos
                </label>
                <FaCheck />
              </div>
            </li>
            {options.map((option, index) => (
              <li className="option-value" key={index}>
                <input
                  type="radio"
                  name={name}
                  id={option.value}
                  value={option.value}
                  defaultChecked={selectedOption.value === option.value}
                  onClick={(e) => {
                    handleChangeSelected(option);
                    collapseSelect(e);
                  }}
                  onKeyDown={(e) => {
                    handleChangeSelected(option);
                    collapseSelect(e);
                  }}
                />

                <div>
                  <label htmlFor={option.value} className="label">
                    {option.label}
                  </label>
                  <FaCheck />
                </div>
              </li>
            ))}
          </>
        )}
      </ul>
    </Container>
  );
}
