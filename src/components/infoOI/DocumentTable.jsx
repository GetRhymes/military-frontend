import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {styled} from '@mui/material/styles';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import {AutoSizer, Column, Table} from 'react-virtualized';
import ClearIcon from '@mui/icons-material/Clear';
import IconButton from "@mui/material/IconButton";
import AddIcon from '@mui/icons-material/Add';

const classes = {
    flexContainer: 'ReactVirtualizedDemo-flexContainer',
    tableRow: 'ReactVirtualizedDemo-tableRow',
    tableRowHover: 'ReactVirtualizedDemo-tableRowHover',
    tableCell: 'ReactVirtualizedDemo-tableCell',
    noClick: 'ReactVirtualizedDemo-noClick',
};

const styles = ({theme}) => ({
    '& .ReactVirtualized__Table__headerRow': {
        ...(theme.direction === 'rtl' && {
            paddingLeft: '0 !important',
        }),
        ...(theme.direction !== 'rtl' && {
            paddingRight: undefined,
        }),
    },
    [`& .${classes.flexContainer}`]: {
        display: 'flex',
        alignItems: 'center',
        boxSizing: 'border-box',
    },
    [`& .${classes.tableRow}`]: {
        cursor: 'pointer',
    },
    [`& .${classes.tableRowHover}`]: {
        '&:hover': {
            backgroundColor: theme.palette.grey[200],
        },
    },
    [`& .${classes.tableCell}`]: {
        flex: 1,
    },
    [`& .${classes.noClick}`]: {
        cursor: 'initial',
    },
});

class MuiVirtualizedTable extends React.PureComponent {
    static defaultProps = {
        headerHeight: 48,
        rowHeight: 48,
    };

    getRowClassName = ({index}) => {
        const {onRowClick} = this.props;
        return clsx(classes.tableRow, classes.flexContainer, {
            [classes.tableRowHover]: index !== -1 && onRowClick != null,
        });
    };

    cellRenderer = ({cellData, columnIndex}) => {
        const {columns, rowHeight, onRowClick} = this.props;
        return (
            <TableCell
                component="div"
                className={clsx(classes.tableCell, classes.flexContainer, {
                    [classes.noClick]: onRowClick == null,
                })}
                variant="body"
                style={{
                    height: rowHeight,
                    padding: "8px",
                    justifyContent: columnIndex === 5 || columnIndex === 6 ? 'center' : 'unset'
                }}
                align={
                    (columnIndex != null && columns[columnIndex].numeric) || false
                        ? 'right'
                        : 'left'
                }
            >
                {cellData}
            </TableCell>
        );
    };

    headerRenderer = ({label, columnIndex}) => {
        const {headerHeight, columns} = this.props;

        return (
            <TableCell
                component="div"
                className={clsx(classes.tableCell, classes.flexContainer, classes.noClick)}
                variant="head"
                style={{
                    height: headerHeight,
                    padding: "8px",
                    justifyContent: columnIndex === 5 || columnIndex === 6 ? 'center' : 'unset'
                }}
                align={columns[columnIndex].numeric || false ? 'right' : 'left'}
            >
                <span>
                    {
                        columnIndex === 4 ?
                            <IconButton onClick={(event) => {
                                event.stopPropagation()
                            }}>
                                <AddIcon fontSize="medium"/>
                            </IconButton>
                            :
                            label
                    }
                </span>
            </TableCell>
        );
    };

    render() {
        const {columns, rowHeight, headerHeight, ...tableProps} = this.props;
        return (
            <AutoSizer>
                {({height, width}) => (
                    <Table
                        height={height}
                        width={width}
                        rowHeight={rowHeight}
                        gridStyle={{
                            direction: 'inherit',
                        }}
                        headerHeight={headerHeight}
                        {...tableProps}
                        rowClassName={this.getRowClassName}
                    >
                        {columns.map(({dataKey, ...other}, index) => {
                            return (
                                <Column
                                    key={dataKey}
                                    headerRenderer={(headerProps) =>
                                        this.headerRenderer({
                                            ...headerProps,
                                            columnIndex: index,
                                        })
                                    }
                                    className={classes.flexContainer}
                                    cellRenderer={this.cellRenderer}
                                    dataKey={dataKey}
                                    {...other}
                                />
                            );
                        })}
                    </Table>
                )}
            </AutoSizer>
        );
    }
}

MuiVirtualizedTable.propTypes = {
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            dataKey: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            numeric: PropTypes.bool,
            width: PropTypes.number.isRequired,
        }),
    ).isRequired,
    headerHeight: PropTypes.number,
    onRowClick: PropTypes.func,
    rowHeight: PropTypes.number,
};

const VirtualizedTable = styled(MuiVirtualizedTable)(styles);

function createData(id, emptyStart, name, regNum, date, remove) {
    return {id, emptyStart, name, regNum, date, remove};
}

export default function DocumentTable({dataDocument}) {

    return (
        <Paper style={{height: "100%", width: "650px"}}>
            <VirtualizedTable
                onRowClick={({index}) => {
                    console.log("hi")
                }}
                rowCount={dataDocument.length}
                rowGetter={
                    ({index}) => {
                        const document = dataDocument[index]
                        return createData(
                            document.id,
                            '',
                            document.name,
                            document.regNum,
                            document.date,
                            <IconButton onClick={(event) => {
                                event.stopPropagation()
                            }}>
                                <ClearIcon fontSize="medium"/>
                            </IconButton>,
                        )
                    }}
                columns={[
                    {
                        width: 50,
                        label: '',
                        dataKey: 'emptyStart'
                    },
                    {
                        width: 250,
                        label: 'Название',
                        dataKey: 'name'
                    },
                    {
                        width: 250,
                        label: 'Номер регистрации',
                        dataKey: 'regNum'
                    },
                    {
                        width: 200,
                        label: 'Дата согласования',
                        dataKey: 'date'
                    },
                    {
                        width: 70,
                        label: '',
                        dataKey: 'remove'
                    }
                ]}
            />
        </Paper>
    );
}