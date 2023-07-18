import React, { useEffect, useRef } from "react";
import AuthLayout from "../components/auth/AuthLayout";
import AuthButton from "../components/auth/AuthButton";
import { TextInput } from "../components/auth/AuthShare";
import { useForm } from "react-hook-form";

export default function CreateAccount() {
  const { register, handleSubmit, setValue } = useForm();

  const lastNameRef = useRef();
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const onNext = (nextone) => {
    nextone?.current?.focus();
  };

  const onVaild = (data) => {
    console.log(data);
  };

  useEffect(() => {
    register("firstName");
    register("lastName");
    register("username");
    register("email");
    register("password");
  }, [register]);

  return (
    <AuthLayout>
      <TextInput
        autoFocus
        placeholder="Frist Name"
        placeholderTextColor={"rgba(255, 255, 255, 0.8)"}
        returnKeyType="next"
        onSubmitEditing={() => onNext(lastNameRef)}
        onChangeText={(text) => setValue("firstName", text)}
      />
      <TextInput
        ref={lastNameRef}
        placeholder="Last Name"
        placeholderTextColor={"rgba(255, 255, 255, 0.8)"}
        returnKeyType="next"
        onSubmitEditing={() => onNext(usernameRef)}
        onChangeText={(text) => setValue("lastName", text)}
      />
      <TextInput
        ref={usernameRef}
        placeholder="Username"
        placeholderTextColor={"rgba(255, 255, 255, 0.8)"}
        returnKeyType="next"
        autoCapitalize="none"
        onSubmitEditing={() => onNext(emailRef)}
        onChangeText={(text) => setValue("username", text)}
      />
      <TextInput
        ref={emailRef}
        placeholder="Email"
        placeholderTextColor={"rgba(255, 255, 255, 0.8)"}
        keyboardType="email-address"
        returnKeyType="next"
        onSubmitEditing={() => onNext(passwordRef)}
        onChangeText={(text) => setValue("email", text)}
      />
      <TextInput
        ref={passwordRef}
        placeholder="Password"
        placeholderTextColor={"rgba(255, 255, 255, 0.8)"}
        secureTextEntry
        returnKeyType="done"
        lastOne={true}
        onSubmitEditing={handleSubmit(onVaild)}
        onChangeText={(text) => setValue("password", text)}
      />

      <AuthButton
        disabled={false}
        text={"Create Account"}
        onPress={handleSubmit(onVaild)}
      />
    </AuthLayout>
  );
}
