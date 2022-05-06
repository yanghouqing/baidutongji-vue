<template>
    <div class="table-components">
        <div class="table-components--theader">
            <div
                :style="setTdStyle(item)"
                class="table-components--theader--td"
                v-for="(item, index) in columns"
                :key="index"
            >
                <span>{{ item.label }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {

    },
    props: {
        selection: {
            type: Boolean,
            default: false,
        },
        columns: {
            type: Array,
            defautl: () => [],
        },
    },
    data() {
        return {

        };
    },
    computed: {
        setTdStyle() {
            return function (row) {
                const length = this.columns.length;
                return {
                    width: row && row.width ? `${row.width}` : `calc(100% / ${length})`,
                    'text-align': row && row.align ? `${row.align}` : 'left',
                };
            };
        },
    },
    methods: {
        onChange() {

        },
    },
};
</script>

<style lang="less" scoped>
.table-components {
    &--theader {
        width: 100%;
        background: #f9f9fa;
        border-radius: 4px;
        display: flex;
        &--td {
            padding: 16px;
            line-height: 16px;
            box-sizing: border-box;
        }
    }
}
</style>
