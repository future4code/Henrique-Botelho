import * as moment from 'moment';

type evento = {
    nome : string,
    descricao : string,
    inicio : moment.Moment
    fim : moment.Moment
}

const allEvents: evento[] = [
	{
		nome: "Reunião",
		descricao: "Reunião muito importante",
		inicio: moment("25/06/2020 15:00", "DD/MM/YYYY HH:mm"),
	 	fim: moment("25/06/2020 16:00", "DD/MM/YYYY HH:mm")
	},
	{
		nome: "Reuniãozinha",
		descricao: "Reunião não muito importante",
		inicio: moment("26/06/2020 17:00", "DD/MM/YYYY HH:mm"),
	 	fim: moment("26/06/2020 18:00", "DD/MM/YYYY HH:mm")
	}
]


// Exercício 2
moment.locale("pt-br")

const printAllEvents = (events: evento[]): void => {
  events.forEach((item: evento) => {
    const duration = item.fim.diff(item.inicio, "minutes");

    const today = moment();
    const daysUntilEvent = item.inicio.diff(today, "days");

    console.log(`
			Nome: ${item.nome}
			Horário de início: ${item.inicio.format("dddd, DD de MMMM de YYYY, HH:mm")}
			Horário de fim: ${item.fim.format("DD de MMMM de YYYY, HH:mm")}
			Descrição: ${item.descricao}
		`);
  });
};

const printAllEvents2 = (events: evento[]): void => {
    events.forEach((item: evento) => {
      const duration = item.fim.diff(item.inicio, "minutes");
  
      const today = moment();
      const daysUntilEvent = item.inicio.diff(today, "days");
  
      console.log(`
              Nome: ${item.nome}
              Horário de início: ${item.inicio.format("dddd, DD de MMMM de YYYY, HH:mm")}
              Horário de fim: ${item.fim.format("DD de MMMM de YYYY, HH:mm")}
              Descrição: ${item.descricao}
              Duração: ${duration} minutos
              Dias até o evento: ${daysUntilEvent}
          `);
    });
  };

  const createEvent = (
    nome: string,
    descricao: string,
    inicio: moment.Moment,
    fim: moment.Moment
  ): void => {
    if (!nome || !descricao || !inicio || !fim) {
      console.log("Invalid input");
      return;
    }
  
    const diffStartAtAndToday = inicio.diff(moment(), "seconds");
    const diffFinishAtAndToday = fim.diff(moment(), "seconds");
  
    if (diffStartAtAndToday < 0 && diffFinishAtAndToday < 0) {
      console.log("Date cannot be prior to the current date");
      return;
    }
  
    allEvents.push({
      nome,
      descricao,
      inicio,
      fim,
    });
  };