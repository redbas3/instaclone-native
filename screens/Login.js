import React, { useEffect, useRef } from "react";
import AuthLayout from "../components/auth/AuthLayout";
import AuthButton from "../components/auth/AuthButton";
import { TextInput } from "../components/auth/AuthShare";
import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import { isLoggedInVar } from "../apollo";

const LOGIN_MUTATION = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      ok
      token
      error
    }
  }
`;

export default function Login() {
  const { register, handleSubmit, setValue, watch } = useForm();
  const passwordRef = useRef();
  const onCompleted = (data) => {
    const {
      login: { ok, token },
    } = data;
    if (ok) {
      isLoggedInVar(true);
    }
  };
  const [loginMutation, { loading }] = useMutation(LOGIN_MUTATION, {
    onCompleted,
  });

  const onNext = (nextone) => {
    nextone?.current?.focus();
  };
  const onVaild = (data) => {
    if (!loading) {
      loginMutation({
        variables: {
          ...data,
        },
      });
    }
  };

  useEffect(() => {
    register("username", { required: true });
    register("password", { required: true });
  }, [register]);

  return (
    <AuthLayout>
      <TextInput
        placeholder="Username"
        placeholderTextColor={"rgba(255, 255, 255, 0.3)"}
        returnKeyType="next"
        autoCapitalize="none"
        onSubmitEditing={() => onNext(passwordRef)}
        onChangeText={(text) => setValue("username", text)}
      />
      <TextInput
        ref={passwordRef}
        placeholder="Password"
        placeholderTextColor={"rgba(255, 255, 255, 0.3)"}
        secureTextEntry
        returnKeyType="done"
        lastOne={true}
        onSubmitEditing={handleSubmit(onVaild)}
        onChangeText={(text) => setValue("password", text)}
      />
      <AuthButton
        loading={loading}
        disabled={!watch("username") || !watch("password")}
        text={"Log in"}
        onPress={handleSubmit(onVaild)}
      />
    </AuthLayout>
  );
}
