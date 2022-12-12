import React, { useEffect, useState } from "react";
import Router from 'next/router';
import styled, { css } from "styled-components";
import { validationPattern } from "../SectionMaterial/ValidationMaterial";
import { colors, mediaQuery, objectSize } from "../../themes";
import { useForm, SubmitHandler } from "react-hook-form";
import { area } from "./SendMailMaterial";

type Inputs = {
  name: string;
  mail: string;
  subject: string;
  message: string;
};

export const SendMail = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>();

  const sendForm: SubmitHandler<Inputs> = async (event) => {
    const res = await fetch('/api/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(event),
    });
    if (res.ok) {
      reset();
      alert(`
        お問い合わせありがとうございます。
        頂いたご内容をもとに追ってご連絡致します。
        今しばらくお待ちください。
      `);
    }
  };

  return (
    <>
    <FormWrapper onSubmit={handleSubmit(sendForm)} name="formsElm">
      <FormOuter>
        <InputWrapper>
          <input
            type="text"
            id="name"
            placeholder="名前"
            {...register(
              "name", {
                required: true
          })} />
          <label htmlFor="name">Name</label>
          {errors.name && <span>入力に不備があります。</span>}
        </InputWrapper>
        <InputWrapper>
          <input
            type="text"
            id="email"
            placeholder="メールアドレス"
            {...register(
              "mail", {
                required: true,
                pattern: validationPattern.email
          })} />
          <label htmlFor="email">Email</label>
          {errors.mail && <span>入力に不備があります。</span>}
        </InputWrapper>
        <InputWrapper>
          <SelectContainer key="subject">
            <select
              id="subject"
              {...register(
                "subject", {
                  required: true,
                  pattern: validationPattern.subject
              })}>
              <option hidden>選択して下さい</option>
              {area.map((areaName, index) => (<option key={index} value={areaName}>{areaName}</option>))}
            </select>
            <label htmlFor="subject">地域</label>
            {errors.subject && <span>入力に不備があります。</span>}
          </SelectContainer>
        </InputWrapper>
        <InputWrapper>
          <textarea
            id="message"
            placeholder="本文"
            {...register(
            "message", {
              required: true,
          })} />
          <label htmlFor="message">内容</label>
          {errors.message && <span>入力に不備があります</span>}
        </InputWrapper>
      </FormOuter>
      <SubmitButton type="submit">送信する</SubmitButton>
    </FormWrapper>
    </>
  );
}

export default SendMail;

const FormWrapper = styled.form`
  display: block;
  margin-top: 72px;
  width: 100%;
  position: relative;

  ${mediaQuery.overTablet(css`
    width: calc(100% * 0.7);
    margin: 96px auto 0;
  `)}

  form, input, label, select, textarea, button {
    display: block;
  }

`
const SelectContainer = styled.div`
  position: relative;
  display: inline-block;

  select {
    width: 200px;
    cursor: pointer;
  }

  select::after {
    content: "";
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 5px solid #ff8725;
    position: absolute;
    right: 4px;
    top: 45%;
    width: 0;
  }
`;


const SubmitButton = styled.button`
  background-color: ${colors.white};
  color: ${colors.primary100};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  padding: 8px;
  border: 1px solid ${colors.primary100};
  font-weight: 300;
  line-height: 1.4;
  font-size: 12px;
  height: 48px;
  width: 100%;
  cursor: pointer;

  ${mediaQuery.overTablet(css`
    font-size: 14px;
    line-height: 1.4;
    height: 60px;
    transition: background-color .3s, border-color .3s, color .3s;

    &:hover {
      color: ${colors.white};
      background-color: ${colors.primary100};
    }
  `)}
`
const FormOuter = styled.ul`
  padding: 0;
  margin: 0;

`

const InputWrapper = styled.li`
  position: relative;
  margin-bottom: 56px;

  input,
  textarea,
  select {
    padding: 9px 12px;
    border: ${colors.grey400} 1px solid;
    color: ${colors.grey200};
    border-radius: 3px;
    font-size: 14px;

    &::placeholder {
      color: ${colors.grey300};
    }

    ${mediaQuery.superMin(css`
      padding: 4px 14px 4px 6px;
    `)}
  }

  select {
    &:invalid {
      color: #bbb;
    }
    option {
      color: black;

      &:first-child {
        color: #bbb;
      }
    }
  }

  label {
    position: absolute;
    top: -24px;
    font-size: 14px;
    transition: .2s ease;
    color: ${colors.grey300};

    + span {
      position: absolute;
      font-size: 12px;
      color: ${colors.error100};
      margin-top: 4px;
      transition: .2s ease;
    }

    &::after {
      content: "";
      display: block;
      position: relative;
      transition: 1s ease;
      width: 0px;
      border-bottom: 1px solid #fff;
    }

    textarea,
    select {
      top: -28px;
    }
  }

  input:focus,
  textarea:focus,
  select:focus {
    border: ${colors.formUi.focus} 1px solid;

    + label {
      color: ${colors.formUi.focus};

      &::after {
        width: 200px;
        border-color: ${colors.formUi.focus};
      }
    }
  }
`