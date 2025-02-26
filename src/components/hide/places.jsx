import fs from 'fs';
import path from 'path';
import React from 'react';
import LandingV1 from '@/components/Home/LandingV1';

const Places = ({ dataAllCitiesMap, dataAllPlaces, dataAllPoetries }) => {
  return (
    <>
      <LandingV1 dataAllCitiesMap={dataAllCitiesMap} dataAllPlaces={dataAllPlaces} dataAllPoetries={dataAllPoetries} />

    </>
  );
}

export default Places;

export async function getStaticProps() {
  const jsonFilePath = path.join(process.cwd(), 'public', 'data');

  let dataAllPlaces = [];
  let dataAllPoetries = [];
  let dataAllCitiesMap = [];

  try {
    // Read data from local JSON files
    dataAllPlaces = JSON.parse(fs.readFileSync(path.join(jsonFilePath, 'dataAllPlaces.json'), 'utf8'));
    dataAllPoetries = JSON.parse(fs.readFileSync(path.join(jsonFilePath, 'dataAllPoetries.json'), 'utf8'));
    dataAllCitiesMap = JSON.parse(fs.readFileSync(path.join(jsonFilePath, 'dataAllCitiesMap.json'), 'utf8'));

  } catch (error) {
    console.error('Error reading local JSON files:', error);

    return {
      props: {
        dataAllPlaces: [],
        dataAllPoetries: [],
        dataAllCitiesMap: [],
        error: error.message,
      },
      revalidate: 10,
    };
  }

  return {
    props: {
      dataAllPlaces,
      dataAllPoetries,
      dataAllCitiesMap,
    },
    revalidate: 10,
  };
}
