import React from 'react'

export interface ModalProps {
  /**
   * Mengontrol visibilitas modal.
   * True untuk menampilkan modal, false untuk menyembunyikan.
   * @type {boolean}
   * @required
   * @example
   * <Modal isOpen={showModal} />
   */
  isOpen: boolean

  /**
   * Judul yang ditampilkan di bagian atas modal.
   * Bisa berupa teks atau elemen React lainnya.
   * @type {React.ReactNode}
   * @required
   * @example
   * <Modal title="Konfirmasi Pesanan" />
   * <Modal title={<div className="flex items-center"><Icon />Hapus Item</div>} />
   */
  title: React.ReactNode

  /**
   * Function yang dipanggil saat modal ditutup
   * atau tombol Cancel/Close diklik.
   * @type {() => void}
   * @required
   * @example
   * <Modal onCancel={() => setShowModal(false)} />
   */
  onCancel: () => void

  /**
   * Function yang dipanggil saat tombol OK/Confirm diklik.
   * Opsional jika modal hanya informatif.
   * @type {() => void}
   * @example
   * <Modal
   *   title="Hapus Item"
   *   onOk={() => handleDelete()}
   * />
   */
  onOk?: () => void

  /**
   * Konten utama yang ditampilkan di dalam modal.
   * @type {React.ReactNode}
   * @required
   * @example
   * <Modal>
   *   <p>Apakah Anda yakin ingin menghapus item ini?</p>
   *   <ItemPreview item={selectedItem} />
   * </Modal>
   */
  children: React.ReactNode

  /**
   * Konten footer kustom untuk menggantikan footer default.
   * Footer default menampilkan tombol Cancel dan OK.
   * @type {React.ReactNode}
   * @example
   * <Modal
   *   footer={
   *     <div className="flex justify-end gap-2">
   *       <Button variant="outline">Batal</Button>
   *       <Button>Lanjutkan</Button>
   *     </div>
   *   }
   * />
   */
  footer?: React.ReactNode

  /**
   * Class CSS tambahan menggunakan Tailwind CSS.
   * Untuk kustomisasi tampilan modal.
   * @type {string}
   * @example
   * <Modal className="max-w-2xl bg-gray-50" />
   */
  className?: string
}
