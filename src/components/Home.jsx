import clsx from "clsx";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";
import { useEffect, useState } from "react";

import useWindowStore from "#store/window";
import useLocationStore from "#store/location";
import { locations } from "#constants";

const projects = locations.work?.children ?? [];

const Home = () => {
  const { openWindow } = useWindowStore();
  const { setActiveLocation } = useLocationStore();
  const [isTouchDevice, setIsTouchDevice] = useState(() =>
    window.matchMedia("(pointer: coarse)").matches || navigator.maxTouchPoints > 0
  );

  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice(
        window.matchMedia("(pointer: coarse)").matches || navigator.maxTouchPoints > 0
      );
    };

    checkTouchDevice();
    window.addEventListener("resize", checkTouchDevice);

    return () => window.removeEventListener("resize", checkTouchDevice);
  }, []);

  const handleOpenProjectFinder = (project) => {
    setActiveLocation(project);
    openWindow("finder");
  };

  useGSAP(() => {
    if (isTouchDevice) return;

    const instances = Draggable.create(".folder");

    return () => instances.forEach((instance) => instance.kill());
  }, [isTouchDevice]);

  return (
    <section id="home">
      <ul>
        {projects.map((project) => (
          <li
            key={project.id}
            className={clsx("group folder", project.windowPosition)}
            onClick={() => handleOpenProjectFinder(project)}
          >
            <img src="/images/folder.png" />
            <p>{project.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;