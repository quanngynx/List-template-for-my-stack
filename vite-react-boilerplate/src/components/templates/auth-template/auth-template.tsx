import { FC } from "react";

interface AuthTemplateProps {
  title: string;
  children: React.ReactNode;
}

const AuthTemplate: FC<AuthTemplateProps> = ({ title, children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h1>{title}</h1>
      <div
        style={{
          width: "300px",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          textAlign: "center",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default AuthTemplate;
