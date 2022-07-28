import React, { FC, useState, useEffect } from 'react';
import HomeView from './HomeView';
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../Routes/RouteController";
import useAPI from '../../Services/APIs/Common/useAPI';
import persons from '../../Services/APIs/Persons/Persons';
import IPerson from '../../Interfaces/IPerson';

type iProps = StackScreenProps<RootStackParamList, "Home">;

const HomeController: FC<iProps> = ({ route, navigation }) => {
  const [dataConnection, setDataConnection] = useState<IPerson[]>([]);
  const [dataConnectionFiltered, setDataConnectionFiltered] = useState<IPerson[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const getPersonsGetAPI = useAPI(persons.getAllPersons);

  useEffect(() => {
    getDataPage();
  }, []);

  const onSearchUpdate = (text: string) => {
    let textToSearch = text.toLowerCase().trim();
    let newArray = dataConnection.filter((item: IPerson) => {
      if (
        item.firstName.toLowerCase().trim().includes(textToSearch) ||
        item.lastName.toLowerCase().trim().includes(textToSearch) ||
        item.jobTitle.toLowerCase().trim().includes(textToSearch)
      ) {
        return true;
      }
      return false;
    });

    setSearchText(text);    
    setDataConnectionFiltered([...newArray]);
  };
  const getDataPage = () => {
    setIsLoading(true);
    getPersonsGetAPI
      .requestPromise()
      .then((info: any) => {
        setIsLoading(false);
        setDataConnection(info.persons);
        setDataConnectionFiltered(info.persons);
      })
      .catch((error: string) => {
        console.log(error);
      });
  };

  const onRefresh = () => {
    getDataPage();
  };

  const goToDetail = (item: IPerson) => {
    navigation.push("Details", {
      item: JSON.stringify(item),
    });
  };

  return (
    <HomeView
      dataConnectionFiltered={dataConnectionFiltered}
      isLoading={isLoading}
      searchText={searchText}
      onRefresh={onRefresh}
      goToDetail={goToDetail}
      onSearchUpdate={onSearchUpdate}
    />
  );
};

export default HomeController;