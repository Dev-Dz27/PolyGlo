"use client";

import { useState } from "react";
import { FormProps } from "../../shared/types";
import { sendContactForm } from "~/utils/api";
import {  IconCircleCheck } from "@tabler/icons-react";

const Form = ({
  title,
  description,
  inputs,
  radioBtns,
  textarea,
  checkboxes,
  btn,
  btnPosition,
  SuccessFormMsg,
}: FormProps) => {
  const [inputValues, setInputValues] = useState([]);
  const [radioBtnValue, setRadioBtnValue] = useState("");
  const [textareaValues, setTextareaValues] = useState("");
  const [checkedState, setCheckedState] = useState<boolean[]>(
    new Array(checkboxes && checkboxes.length).fill(false)
  );
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitSuccessful, setFormSubmitSuccessful] = useState(false);
  const [error, setError] = useState("");
  // Update the value of the entry fields
  const changeInputValueHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;

    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  // Update checked radio buttons
  const changeRadioBtnsHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRadioBtnValue(event.target.value);
  };

  // Update the textarea value
  const changeTextareaHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setTextareaValues(event.target.value);
  };

  // Update checkbox radio buttons
  const changeCheckboxHandler = (index: number) => {
    setCheckedState((prevValues) => {
      const newValues = [...(prevValues as boolean[])];
      newValues.map(() => {
        newValues[index] = !checkedState[index];
      });

      return newValues;
    });
  };

  const resetForm = () => {
    setInputValues({});
    setRadioBtnValue("");
    setTextareaValues("");
    setCheckedState(new Array(checkboxes && checkboxes.length).fill(false));
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const formData = {
      inputValues,
      radioBtnValue,
      textareaValues,
      checkedState,
    };
    try {
      await sendContactForm(formData);
      setFormSubmitSuccessful(true);
      setError("");
      resetForm();
       // Clear the form after 5 seconds
    setTimeout(() => {
      setFormSubmitSuccessful(false);
    }, 5000);
    } catch (error) {
      setFormSubmitSuccessful(false);
      setError(error.message || "An error occurred while submitting the form.");
    }
    setFormSubmitted(true);
  };




  console.log(SuccessFormMsg)

  return (
    <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
      {title && (
        <h2 className={`${description ? "mb-2" : "mb-4"} text-2xl font-bold`}>
          {title}
        </h2>
      )}
      {description && <p className="mb-4">{description}</p>}
      { formSubmitted && (
        <div className="mb-4"> {formSubmitSuccessful ? (

        <div  className="flex items-center text-green-500">
          <IconCircleCheck className="mr-2" />
          <p>{SuccessFormMsg}</p>
          </div>
          ) : null}
          </div>
          )}


      <form onSubmit={onSubmit} id="contactForm">
        <div className="mb-6">
          {/* Inputs */}
          <div className="mx-0 mb-1 sm:mb-4">
            {inputs.map(({ type, label, name, placeholder }, index) => (
              <div key={`item-input-${index}`} className="mx-0 mb-1 sm:mb-4">
                <label
                  htmlFor={name}
                  className="pb-1 text-xs uppercase tracking-wider"
                >
                  {label}
                </label>
                <input
                required
                  type={type}
                  name={name}
                  value={inputValues[name] || ''}
                  onChange={changeInputValueHandler}
                  placeholder={placeholder}
                  className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                />
              </div>
            ))}
          </div>
          {/* Radio buttons */}
          {radioBtns && (
            <div className="mx-0 mb-1 sm:mb-3">
              <label className="pb-1 text-xs uppercase tracking-wider">
                {radioBtns?.label}
              </label>
              <div className="flex flex-wrap">
                {radioBtns.radios.map(({ label }, index) => (
                  <div
                  required
                    key={`radio-btn-${index}`}
                    className="mr-4 items-baseline"
                  >
                    <input
                    
                      type="radio"
                      name={label}
                      value={`${label}`}
                      checked={radioBtnValue === `${label}`}
                      onChange={changeRadioBtnsHandler}
                      className="cursor-pointer"
                    />
                    <label className="ml-2">{label}</label>
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* Textarea */}
          {textarea && (
            <div className={`mx-0 mb-1 sm:mb-4`}>
              <label
                htmlFor={textarea.name}
                className="pb-1 text-xs uppercase tracking-wider"
              >
                {textarea.label}
              </label>
              <textarea
              required
                name={textarea.name}
                cols={textarea.cols}
                rows={textarea.rows}
                value={textareaValues}
                onChange={(e) => changeTextareaHandler(e)}
                placeholder={textarea.placeholder}
                className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
              />
            </div>
          )}
          {/* Checkboxes */}
          {checkboxes && (
            <div className="mx-0 mb-1 sm:mb-4">
              {checkboxes.map(({ label }, index) => (
                <div
                  key={`checkbox-${index}`}
                  className="mx-0 my-1 flex items-baseline"
                >
                  <input
                    type="checkbox"
                    name={label}
                    id={`checkbox-${index}`}
                    checked={checkedState[index]}
                    onChange={() => changeCheckboxHandler(index)}
                    className="cursor-pointer"
                  />
                  <label htmlFor={`checkbox-${index}`} className="ml-2">
                    {label}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
        <div
          className={`${
            btnPosition === "left"
              ? "text-left"
              : btnPosition === "right"
              ? "text-right"
              : "text-center"
          }`}
        >
          <button type={btn.type} className="btn btn-primary sm:mb-0">
            {btn.title}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
