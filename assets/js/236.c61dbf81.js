(window.webpackJsonp=window.webpackJsonp||[]).push([[236],{642:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_3-7-汇编语言的威力"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-7-汇编语言的威力"}},[t._v("#")]),t._v(" 3.7 汇编语言的威力")]),t._v(" "),s("p",[t._v("汇编语言的真正威力来自两个维度：一是突破框架限制，实现看似不可能的任务；二是突破指令限制，通过高级指令挖掘极致的性能。对于第一个问题，我们将演示如何通过 Go 汇编语言直接访问系统调用，和直接调用 C 语言函数。对于第二个问题，我们将演示 X64 指令中 AVX 等高级指令的简单用法。")]),t._v(" "),s("h2",{attrs:{id:"_3-7-1-系统调用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-7-1-系统调用"}},[t._v("#")]),t._v(" 3.7.1 系统调用")]),t._v(" "),s("p",[t._v("系统调用是操作系统对外提供的公共接口。因为操作系统彻底接管了各种底层硬件设备，因此操作系统提供的系统调用成了实现某些操作的唯一方法。从另一个角度看，系统调用更像是一个 RPC 远程过程调用，不过信道是寄存器和内存。在系统调用时，我们向操作系统发送调用的编号和对应的参数，然后阻塞等待系统调用地返回。因为涉及到阻塞等待，因此系统调用期间的 CPU 利用率一般是可以忽略的。另一个和 RPC 地远程调用类似的地方是，操作系统内核处理系统调用时不会依赖用户的栈空间，一般不会导致爆栈发生。因此系统调用是最简单安全的一种调用了。")]),t._v(" "),s("p",[t._v("系统调用虽然简单，但是它是操作系统对外的接口，因此不同的操作系统调用规范可能有很大的差异。我们先看看 Linux 在 AMD64 架构上的系统调用规范，在 "),s("code",[t._v("syscall/asm_linux_amd64.s")]),t._v(" 文件中有注释说明：")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// System calls for AMD64, Linux")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// func Syscall(trap int64, a1, a2, a3 uintptr) (r1, r2, err uintptr);")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Trap # in AX, args in DI SI DX R10 R8 R9, return in AX DX")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Note that this differs from "standard" ABI convention, which')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// would pass 4th arg in CX, not R10.")]),t._v("\n")])])]),s("p",[t._v("这是 "),s("code",[t._v("syscall.Syscall")]),t._v(" 函数的内部注释，简要说明了 Linux 系统调用的规范。系统调用的前 6 个参数直接由 DI、SI、DX、R10、R8 和 R9 寄存器传输，结果由 AX 和 DX 寄存器返回。macOS 等类 UINX 系统调用的参数传输大多数都采用类似的规则。")]),t._v(" "),s("p",[t._v("macOS 的系统调用编号在 "),s("code",[t._v("/usr/include/sys/syscall.h")]),t._v(" 头文件，Linux 的系统调用号在 "),s("code",[t._v("/usr/include/asm/unistd.h")]),t._v(" 头文件。虽然在 UNIX 家族中是系统调用的参数和返回值的传输规则类似，但是不同操作系统提供的系统调用却不是完全相同的，因此系统调用编号也有很大的差异。以 UNIX 系统中著名的 write 系统调用为例，在 macOS 的系统调用编号为 4，而在 Linux 的系统调用编号却是 1。")]),t._v(" "),s("p",[t._v("我们将基于 write 系统调用包装一个字符串输出函数。下面的代码是 macOS 版本：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// func SyscallWrite_Darwin(fd int, msg string) int\nTEXT ·SyscallWrite_Darwin(SB), NOSPLIT, $0\n\tMOVQ $(0x2000000+4), AX // #define SYS_write 4\n\tMOVQ fd+0(FP),       DI\n\tMOVQ msg_data+8(FP), SI\n\tMOVQ msg_len+16(FP), DX\n\tSYSCALL\n\tMOVQ AX, ret+0(FP)\n\tRET\n")])])]),s("p",[t._v("其中第一个参数是输出文件的文件描述符编号，第二个参数是字符串的头部。字符串头部是由 reflect.StringHeader 结构定义，第一成员是 8 字节的数据指针，第二个成员是 8 字节的数据长度。在 macOS 系统中，执行系统调用时还需要将系统调用的编号加上 0x2000000 后再行传入 AX。然后再将 fd、数据地址和长度作为 write 系统调用的三个参数输入，分别对应 DI、SI 和 DX 三个寄存器。最后通过 SYSCALL 指令执行系统调用，系统调用返回后从 AX 获取返回值。")]),t._v(" "),s("p",[t._v("这样我们就基于系统调用包装了一个定制的输出函数。在 UNIX 系统中，标准输入 stdout 的文件描述符编号是 1，因此我们可以用 1 作为参数实现字符串的输出：")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("SyscallWrite_Darwin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fd "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" msg "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" runtime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("GOOS "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"darwin"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("SyscallWrite_Darwin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello syscall!\\n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("如果是 Linux 系统，只需要将编号改为 write 系统调用对应的 1 即可。而 Windows 的系统调用则有另外的参数传输规则。在 X64 环境 Windows 的系统调用参数传输规则和默认的 C 语言规则非常相似，在后续的直接调用 C 函数部分再行讨论。")]),t._v(" "),s("h2",{attrs:{id:"_3-7-2-直接调用-c-函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-7-2-直接调用-c-函数"}},[t._v("#")]),t._v(" 3.7.2 直接调用 C 函数")]),t._v(" "),s("p",[t._v("在计算机的发展的过程中，C 语言和 UNIX 操作系统有着不可替代的作用。因此操作系统的系统调用、汇编语言和 C 语言函数调用规则几个技术是密切相关的。")]),t._v(" "),s("p",[t._v("在 X86 的 32 位系统时代，C 语言一般默认的是用栈传递参数并用 AX 寄存器返回结果，称为 cdecl 调用约定。Go 语言函数和 cdecl 调用约定非常相似，它们都是以栈来传递参数并且返回地址和 BP 寄存器的布局都是类似的。但是 Go 语言函数将返回值也通过栈返回，因此 Go 语言函数可以支持多个返回值。我们可以将 Go 语言函数看作是没有返回值的 C 语言函数，同时将 Go 语言函数中的返回值挪到 C 语言函数参数的尾部，这样栈不仅仅用于传入参数也用于返回多个结果。")]),t._v(" "),s("p",[t._v("在 X64 时代，AMD 架构增加了 8 个通用寄存器，为了提高效率 C 语言也默认改用寄存器来传递参数。在 X64 系统，默认有 System V AMD64 ABI 和 Microsoft x64 两种 C 语言函数调用规范。其中 System V 的规范适用于 Linux、FreeBSD、macOS 等诸多类 UNIX 系统，而 Windows 则是用自己特有的调用规范。")]),t._v(" "),s("p",[t._v("在理解了 C 语言函数的调用规范之后，汇编代码就可以绕过 CGO 技术直接调用 C 语言函数。为了便于演示，我们先用 C 语言构造一个简单的加法函数 myadd：")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("<stdint.h>")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("int64_t")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("myadd")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("int64_t")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("int64_t")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("然后我们需要实现一个 asmCallCAdd 函数：")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("asmCallCAdd")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cfun "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uintptr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int64")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int64")]),t._v("\n")])])]),s("p",[t._v("因为 Go 汇编语言和 CGO 特性不能同时在一个包中使用（因为 CGO 会调用 gcc，而 gcc 会将 Go 汇编语言当做普通的汇编程序处理，从而导致错误），我们通过一个参数传入 C 语言 myadd 函数的地址。asmCallCAdd 函数的其余参数和 C 语言 myadd 函数的参数保持一致。")]),t._v(" "),s("p",[t._v("我们只实现 System V AMD64 ABI 规范的版本。在 System V 版本中，寄存器可以最多传递六个参数，分别对应 DI、SI、DX、CX、R8 和 R9 六个寄存器（如果是浮点数则需要通过 XMM 寄存器传送），返回值依然通过 AX 返回。通过对比系统调用的规范可以发现，系统调用的第四个参数是用 R10 寄存器传递，而 C 语言函数的第四个参数是用 CX 传递。")]),t._v(" "),s("p",[t._v("下面是 System V AMD64 ABI 规范的 asmCallCAdd 函数的实现：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// System V AMD64 ABI\n// func asmCallCAdd(cfun uintptr, a, b int64) int64\nTEXT ·asmCallCAdd(SB), NOSPLIT, $0\n\tMOVQ cfun+0(FP), AX // cfun\n\tMOVQ a+8(FP),    DI // a\n\tMOVQ b+16(FP),   SI // b\n\tCALL AX\n\tMOVQ AX, ret+24(FP)\n\tRET\n")])])]),s("p",[t._v("首先是将第一个参数表示的 C 函数地址保存到 AX 寄存器便于后续调用。然后分别将第二和第三个参数加载到 DI 和 SI 寄存器。然后 CALL 指令通过 AX 中保持的 C 语言函数地址调用 C 函数。最后从 AX 寄存器获取 C 函数的返回值，并通过 asmCallCAdd 函数返回。")]),t._v(" "),s("p",[t._v("Win64 环境的 C 语言调用规范类似。不过 Win64 规范中只有 CX、DX、R8 和 R9 四个寄存器传递参数（如果是浮点数则需要通过 XMM 寄存器传送），返回值依然通过 AX 返回。虽然是可以通过寄存器传输参数，但是调用这依然要为前四个参数准备栈空间。需要注意的是，Windows x64 的系统调用和 C 语言函数可能是采用相同的调用规则。因为没有 Windows 测试环境，我们这里就不提供了 Windows 版本的代码实现了，Windows 用户可以自己尝试实现类似功能。")]),t._v(" "),s("p",[t._v("然后我们就可以使用 asmCallCAdd 函数直接调用 C 函数了：")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n#include <stdint.h>\n\nint64_t myadd(int64_t a, int64_t b) {\n\treturn a+b;\n}\n*/")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"C"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\tasmpkg "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"path/to/asm"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" runtime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("GOOS "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"windows"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("asmpkg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("asmCallCAdd")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("uintptr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("unsafe"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Pointer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("C"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("myadd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("456")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("在上面的代码中，通过 "),s("code",[t._v("C.myadd")]),t._v(" 获取 C 函数的地址，然后转换为合适的类型再传人 asmCallCAdd 函数。在这个例子中，汇编函数假设调用的 C 语言函数需要的栈很小，可以直接复用 Go 函数中多余的空间。如果 C 语言函数可能需要较大的栈，可以尝试像 CGO 那样切换到系统线程的栈上运行。")]),t._v(" "),s("h2",{attrs:{id:"_3-7-3-avx-指令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-7-3-avx-指令"}},[t._v("#")]),t._v(" 3.7.3 AVX 指令")]),t._v(" "),s("p",[t._v("从 Go1.11 开始，Go 汇编语言引入了 AVX512 指令的支持。AVX 指令集是属于 Intel 家的 SIMD 指令集中的一部分。AVX512 的最大特点是数据有 512 位宽度，可以一次计算 8 个 64 位数或者是等大小的数据。因此 AVX 指令可以用于优化矩阵或图像等并行度很高的算法。不过并不是每个 X86 体系的 CPU 都支持了 AVX 指令，因此首要的任务是如何判断 CPU 支持了哪些高级指令。")]),t._v(" "),s("p",[t._v("在 Go 语言标准库的 "),s("code",[t._v("internal/cpu")]),t._v(" 包提供了 CPU 是否支持某些高级指令的基本信息，但是只有标准库才能引用这个包（因为 internal 路径的限制）。该包底层是通过 X86 提供的 CPUID 指令来识别处理器的详细信息。最简便的方法是直接将 "),s("code",[t._v("internal/cpu")]),t._v(" 包克隆一份。不过这个包为了避免复杂的依赖没有使用 init 函数自动初始化，因此需要根据情况手工调整代码执行 doinit 函数初始化。")]),t._v(" "),s("p",[s("code",[t._v("internal/cpu")]),t._v(" 包针对 X86 处理器提供了以下特性检测：")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" cpu\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" X86 x86\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The booleans in x86 contain the correspondingly named cpuid feature bit.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// HasAVX and HasAVX2 are only set if the OS does support XMM and YMM registers")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// in addition to the cpuid feature bit being set.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The struct is padded to avoid false sharing.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" x86 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tHasAES       "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v("\n\tHasADX       "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v("\n\tHasAVX       "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v("\n\tHasAVX2      "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v("\n\tHasBMI1      "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v("\n\tHasBMI2      "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v("\n\tHasERMS      "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v("\n\tHasFMA       "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v("\n\tHasOSXSAVE   "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v("\n\tHasPCLMULQDQ "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v("\n\tHasPOPCNT    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v("\n\tHasSSE2      "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v("\n\tHasSSE3      "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v("\n\tHasSSSE3     "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v("\n\tHasSSE41     "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v("\n\tHasSSE42     "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("因此我们可以用以下的代码测试运行时的 CPU 是否支持 AVX2 指令集：")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\tcpu "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"path/to/cpu"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" cpu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("X86"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("HasAVX2 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// support AVX2")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("AVX512 是比较新的指令集，只有高端的 CPU 才会提供支持。为了主流的 CPU 也能运行代码测试，我们选择 AVX2 指令来构造例子。AVX2 指令每次可以处理 32 字节的数据，可以用来提升数据复制的工作的效率。")]),t._v(" "),s("p",[t._v("下面的例子是用 AVX2 指令复制数据，每次复制数据 32 字节倍数大小的数据：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// func CopySlice_AVX2(dst, src []byte, len int)\nTEXT ·CopySlice_AVX2(SB), NOSPLIT, $0\n\tMOVQ dst_data+0(FP),  DI\n\tMOVQ src_data+24(FP), SI\n\tMOVQ len+32(FP),      BX\n\tMOVQ $0,              AX\n\nLOOP:\n\tVMOVDQU 0(SI)(AX*1), Y0\n\tVMOVDQU Y0, 0(DI)(AX*1)\n\tADDQ $32, AX\n\tCMPQ AX, BX\n\tJL   LOOP\n\tRET\n")])])]),s("p",[t._v("其中 VMOVDQU 指令先将 "),s("code",[t._v("0(SI)(AX*1)")]),t._v(" 地址开始的 32 字节数据复制到 Y0 寄存器中，然后再复制到 "),s("code",[t._v("0(DI)(AX*1)")]),t._v(" 对应的目标内存中。VMOVDQU 指令操作的数据地址可以不用对齐。")]),t._v(" "),s("p",[t._v("AVX2 共有 16 个 Y 寄存器，每个寄存器有 256bit 位。如果要复制的数据很多，可以多个寄存器同时复制，这样可以利用更高效的流水特性优化性能。")])])}),[],!1,null,null,null);s.default=e.exports}}]);