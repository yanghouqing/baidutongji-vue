<script>
export default {
    props: {
        tableHeaderBackground: {
            type: String,
            default: '#f9f9fa',
        },
        /**
         * @description 空数据时显示的文本内容
         * @type {loading:String}
         */
        emptyText: {
            type: String,
            default: '暂无相关数据',
        },
        /**
         * @description 表格的列内容
         * @type {loading:Array}
         */
        columns: {
            type: Array,
            default: () => [],
        },
        /**
         * @description 显示的结构化数据
         * @type {loading:Array}
         */
        data: {
            type: Array,
            default: () => [],
        },
        options: {
            type: Object,
            default: () => {
                return {
                    currentPage: 1,
                    pageSize: 10,
                    total: 100,
                    pageSizes: [10, 20, 30, 40, 50, 100],
                    layout: 'prev, pager, next, sizes, total',
                    pagerCount: 5,
                };
            },
        },
        sizeChange: {
            type: Function,
            default: () => { },
        },
        currentChange: {
            type: Function,
            default: () => { },
        },
        // 分页组件
        pagination: {
            type: Boolean,
            default: false,
        },
        paginationAlign: {
            type: String,
            default: '',
        },
    },
    render(h) {
        return <div class="table-main-container">
            <div class="table-main-container-content">
                <div class="table-header-wrapper">
                    <table class="table-main">
                        <colgroup>
                            {this.columns.map((item, index) => <col key={index} width={item.width} />)}
                        </colgroup>
                        <thead style={this.setHeaderBgColor} class={this.setHeaderClass}>
                            <tr>
                                {this.columns.map((item, index) => {
                                    return <th
                                        key={index}
                                        class={this.setTbodyTdClass(item.align)}
                                        style={this.setHeaderThStyle(item)}>
                                        <div>
                                            <span>{item.label}</span>
                                        </div>
                                    </th>
                                })}
                            </tr>
                        </thead>
                    </table>
                </div>
                <div class="table-body-wrapper">
                    <table class="table-main">
                        <colgroup>
                            {this.columns.map((item, index) => <col key={index} width={item.width} />)}
                        </colgroup>
                        <tbody class="tbody">
                            {this.data.length > 0 && this.data.map((item, index) => {
                                return <tr key={index}>
                                    {this.columns.map((row, rowIndex) => {
                                        return <td
                                            class={this.setTbodyTdClass(row.align)}
                                            key={rowIndex}
                                        >
                                            {row.render ? scope => row.render(h, scope) : row.slot ? scope => h('div', [this.$scopedSlots[row.slot](scope)]) : h('div', [
                                                h('span', {
                                                    class: {
                                                        'text-left': row.align === 'left',
                                                        'text-center': row.align === 'center',
                                                        'text-right': row.align === 'right',
                                                    },
                                                }, item[row.key]),
                                            ])}
                                        </td>
                                    })}
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    },
    data() {
        return {

        };
    },
    computed: {
        setHeaderBgColor() {
            return {
                background: this.tableHeaderBackground,
            };
        },
        setHeaderThStyle() {
            return function (row) {
                return {
                    width: row.width,
                };
            };
        },
        setHeaderClass() {
            return {
                thead: true,
                'select-none': true,
            };
        },
        setTbodyTdClass() {
            return function (align) {
                return {
                    'text-left': align === 'left' || !align,
                    'text-right': align === 'right',
                    'text-center': align === 'center',
                };
            };
        },
    },
    methods: {

    },
};
</script>

<style lang="less" scoped>
.table-main-container {
    .table-border {
        border: 1px solid rgba(132, 136, 147, 0.2);
    }
    .table-border-right {
        border-right: 1px solid rgba(132, 136, 147, 0.2);
    }
    &-content {
        box-sizing: border-box;
        .table-main {
            width: 100%;
            table-layout: fixed;
            line-height: 23px;

            .thead {
                tr {
                    th {
                        padding: 16px;
                        box-sizing: border-box;
                        font-weight: 400;
                        font-size: 12px;
                        line-height: 16px;
                        color: #85878a;

                        &:last-of-type {
                            border-right: 0;
                        }
                    }
                }
            }
            .tbody {
                tr {
                    transition: 0.1s ease-in-out;
                    box-sizing: border-box;
                    &:last-of-type {
                        border-bottom: 0;
                    }
                    td {
                        padding: 12px;
                        box-sizing: border-box;

                        &:last-of-type {
                            border-right: 0;
                        }
                        .cell {
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: normal;
                            word-break: break-all;
                        }
                    }
                }
            }
        }
    }
}
</style>
