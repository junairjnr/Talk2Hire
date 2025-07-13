import { useGLTF } from "@react-three/drei";

export function RobotModel(props: any) {
  const { scene } = useGLTF("/models/robot.glb"); // Add model in public/models

  return <primitive object={scene} {...props} scale={1.5} />;
}
