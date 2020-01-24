import React from "react";
import {
  Grid,
  Typography,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Box
} from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Tab from "./Tab";
import { paddingDownSm } from "../helper/DefaultStyle";
import ReactGA from "react-ga";
import ExpansionPanel from "./ExpansionPanel";

const useStylesTarifs = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      th: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 10,
        color: "#898989"
      },
      td: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 10,
        color: "black"
      },
      TableW: {
        widthh: "100%"
      }
    },
    [theme.breakpoints.between("sm", "xl")]: {
      th: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 16,
        color: "#898989"
      },
      td: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 16,
        color: "black",
        "& span": {
          fontSize: 14,
          color: "#5B5B5B"
        }
      },
      TableW: {
        widthh: "70%"
      }
    },
    th: {
      width: '30%'
    }
  })
);

const Documents = () => {
  const classes = useStylesTarifs({});

  const rows = [
    { code: "Для резидентов РК", value: "Хватает удостоверения личности или паспорта" },
    { code: "Для нерезидентов РК", value: (
        <Typography className={classes.td}>
          · Документ, удостоверяющий личность (паспорт иностранного гражданина, вид на жительство иностранца в Республике Казахстан, удостоверение лица без гражданства)<br/><br/> · Документ, содержащий информацию об ИИН<br/><br/> · Документ, удостоверяющий регистрацию в уполномоченных органах РК  на право въезда, выезда и пребывания физического лица–нерезидента на территории РК, если иное не предусмотрено международными договорами, ратифицированными РК.
        </Typography>
      )
    }
  ];

  return (
    <Box className={classes.TableW}>
      <Table>
        <TableBody>
          {rows.map((m, i) => (
            <TableRow key={i}>
              <TableCell className={classes.th}>{m.code}</TableCell>
              <TableCell className={classes.td}>{m.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

const Cashback = () => {
  const classes = useStylesTarifs({});

  const rows = [
    { code: "Тип карты", value: "Visa Infinite #IRonCard" },
    { code: "Стоимость выпуска", value: "30 000 скидка 50% в течение января" },
    {
      code: "Стоимость обслуживания, мес",
      value:
        "Бесплатно в случае: <br/>1. Безналичная оплата в месяц от 1 000 000 ₸ <br/>2. Депозит/Остаток на карте от 15 000 000 ₸ <br/><span>В прочих случаях - 10 000 KZT в месяц</span>"
    },
    {
      code: "Cashback",
      value:
        "2% базовый<br/>+1% при наличии вклада от 1 000 000 до 6 000 000 ₸<br/>+2% при наличии вклада от 6 000 000 ₸"
    },
    { code: "Cashback лимит в мес", value: "100 000 ₸" },
    {
      code:
        "Получение наличных<br/>(сторонние банкоматы РК)<br/><br/>Получение наличных<br/>(сторонние банкоматы мир)",
      value:
        "от 5 000 ₸ - 0 ₸<br/>до 5 000 ₸ - 100 ₸<br/>лимит в мес 3 000 000 ₸, свыше - 1% мин 250 ₸"
    },
    {
      code: "Переводы на карту любого банка РК",
      value: "Бесплатно"
    },
    {
      code: "Переводы на карту в зарубежный банк",
      value: "1 000 000 - бесплатно<br/>свыше 1%, мин 250 ₸"
    },
    { code: "Смс-обслуживание", value: "Бесплатно" },
    { code: "Перевыпуск по утере", value: "80 000 ₸" }
  ];

  return (
    <Box className={classes.TableW}>
      <Table>
        <TableBody>
          {rows.map((m, i) => (
            <TableRow key={i}>
              <TableCell className={classes.th}>
                <div dangerouslySetInnerHTML={{ __html: m.code }} />
              </TableCell>
              <TableCell className={classes.td}>
                <div dangerouslySetInnerHTML={{ __html: m.value }} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

const Faq = () => {
  const classes = useStylesTarifs({});

  const rows = [
    { code: "Кредитный лимит", value: "до 3 млн тенге" },
    { code: "Выпуск", value: "Бесплатно" },
    { code: "Годовое обслуживание", value: "Бесплатно" },
    { code: "Беспроцентный период", value: "55 дней" },
    { code: "Процентная ставка", value: "25%" },
    { code: "Комиссия за снятие наличных", value: "25%" },
    { code: "Процентная ставка", value: "4%" },
    { code: "Комиссия за перевод в другие Банки", value: "4%" }
  ];

  return (
    <Box className={classes.TableW}>
      <Table>
        <TableBody>
          {rows.map((m, i) => (
            <TableRow key={i}>
              <TableCell className={classes.th}>{m.code}</TableCell>
              <TableCell className={classes.td}>{m.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      root: {
        padding: paddingDownSm
      },
      title: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 20,
        color: "#141414"
      }
    },
    [theme.breakpoints.between("sm", "xl")]: {
      root: {
        padding: "60px 42px 52px 52px",
        width: "100%"
      },
      title: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 40,
        color: "#141414"
      }
    },
    root: {
      maxWidth: 1280,
      margin: '0 auto',
      position: 'relative'
    }
  })
);

const AdditionalInfo = () => {
  const classes = useStyles({});

  const swipeTab = (index: number) => {
    const actionName =
      index === 0 ? "Iron_Additionally_Rates" : "Iron_Additionally_Conditions";

    ReactGA.event({
      category: `BccIronCard_${actionName}`,
      action: actionName
    });
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Typography className={classes.title}>Полезно знать</Typography>
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Tab
          onHandleChanged={(i: number) => swipeTab(i)}
          menuTitle={["Документы на открытие карты", "Часто задаваемые вопросы"]}
          pans={[<Documents />, <ExpansionPanel/>]}
        />
      </Grid>
    </Grid>
  );
};

export default AdditionalInfo;
