import React, { useEffect, useRef } from "react";
import AuthLayout from "../components/auth/AuthLayout";
import AuthButton from "../components/auth/AuthButton";
import { TextInput } from "../components/auth/AuthShare";
import { useForm } from "react-hook-form";

export default function Login({ navigation }) {
  const { register, handleSubmit, setValue } = useForm();
  const passwordRef = useRef();

  const onNext = (nextone) => {
    nextone?.current?.focus();
  };

  const onDone = () => {
    alert("done");
  };

  const onVaild = (data) => {
    console.log(data);
  };

  useEffect(() => {
    register("username");
    register("password");
  }, [register]);

  return (
    <AuthLayout>
      <TextInput
        placeholder="Username"
        placeholderTextColor={"rgba(255, 255, 255, 0.8)"}
        returnKeyType="next"
        autoCapitalize="none"
        onSubmitEditing={() => onNext(passwordRef)}
        onChangeText={(text) => setValue("username", text)}
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
        text={"Log in"}
        onPress={handleSubmit(onVaild)}
      />
    </AuthLayout>
  );
}
